// Compatibility checking logic for PC parts

export function checkCompatibility(build) {
  const issues = []
  const { cpu, motherboard, memory, gpu, psu, cooler, case: pcCase, ssd } = build

  // 1. CPU ↔ Motherboard: socket match
  if (cpu && motherboard && cpu.socket !== motherboard.socket) {
    issues.push({
      type: 'error',
      category: 'motherboard',
      message: `插槽不匹配：CPU 为 ${cpu.socket}，主板为 ${motherboard.socket}`
    })
  }

  // 2. Memory ↔ Motherboard: DDR type match
  if (memory && motherboard && memory.type !== motherboard.memoryType) {
    issues.push({
      type: 'error',
      category: 'memory',
      message: `内存类型不匹配：主板支持 ${motherboard.memoryType}，内存为 ${memory.type}`
    })
  }

  // 3. GPU ↔ PSU: power check (GPU TDP + CPU TDP + 100W base + 50W per SSD/HDD ≈ total)
  if (gpu && psu) {
    const basePower = 50 // motherboard + fans + misc
    const cpuPower = cpu ? cpu.tdp : 0
    const gpuPower = gpu.tdp
    const storagePower = (ssd ? 7 : 0) + (build.hdd ? 7 : 0)
    const totalPower = basePower + cpuPower + gpuPower + storagePower
    const recommendedPsu = Math.ceil(totalPower / 0.75) // 25% headroom minimum

    if (psu.wattage < recommendedPsu) {
      issues.push({
        type: 'warning',
        category: 'psu',
        message: `电源功率可能不足：预估功耗约 ${totalPower}W，建议 ${recommendedPsu}W 以上电源（当前 ${psu.wattage}W）`
      })
    }
  }

  // 4. Cooler ↔ CPU: socket support
  if (cooler && cpu) {
    if (!cooler.sockets.includes(cpu.socket)) {
      issues.push({
        type: 'error',
        category: 'cooler',
        message: `散热器不支持 ${cpu.socket} 插槽`
      })
    }

    // TDP check
    if (cpu.tdp > cooler.tdp) {
      issues.push({
        type: 'warning',
        category: 'cooler',
        message: `散热器 TDP 可能不足：CPU TDP ${cpu.tdp}W，散热器 TDP ${cooler.tdp}W`
      })
    }
  }

  // 5. Case ↔ Motherboard: form factor compatibility
  if (pcCase && motherboard) {
    if (!pcCase.motherboardSupport.includes(motherboard.formFactor)) {
      issues.push({
        type: 'error',
        category: 'case',
        message: `机箱不支持 ${motherboard.formFactor} 主板`
      })
    }
  }

  // 6. Case ↔ GPU: length check
  if (pcCase && gpu) {
    if (gpu.length > pcCase.maxGpuLength) {
      issues.push({
        type: 'error',
        category: 'case',
        message: `显卡过长：显卡长度 ${gpu.length}mm，机箱最大支持 ${pcCase.maxGpuLength}mm`
      })
    }
  }

  // 7. Case ↔ Cooler: height check for air coolers
  if (pcCase && cooler && cooler.type === '风冷' && cooler.height) {
    if (cooler.height > pcCase.maxCoolerHeight) {
      issues.push({
        type: 'error',
        category: 'case',
        message: `散热器过高：散热器高度 ${cooler.height}mm，机箱最大支持 ${pcCase.maxCoolerHeight}mm`
      })
    }
  }

  // 8. Case ↔ Cooler: radiator size check for AIO
  if (pcCase && cooler && cooler.type === '一体水冷' && cooler.radiatorSize) {
    if (cooler.radiatorSize > pcCase.maxRadiator) {
      issues.push({
        type: 'error',
        category: 'case',
        message: `冷排过大：冷排尺寸 ${cooler.radiatorSize}mm，机箱最大支持 ${pcCase.maxRadiator}mm`
      })
    }
  }

  // 9. Motherboard PCIe version check for GPU
  if (motherboard && gpu) {
    const mbPcieVer = parseFloat(motherboard.pcieVersion)
    const gpuPcieVer = parseFloat(gpu.pcieVersion)
    if (mbPcieVer < gpuPcieVer) {
      issues.push({
        type: 'warning',
        category: 'gpu',
        message: `主板 PCIe ${motherboard.pcieVersion} 可能无法完全发挥显卡 PCIe ${gpu.pcieVersion} 性能`
      })
    }
  }

  return issues
}

export function isPartCompatible(build, category, part) {
  const tempBuild = { ...build, [category]: part }
  const issues = checkCompatibility(tempBuild)
  return issues.filter(i => i.category === category).length === 0
}

export function filterCompatibleParts(parts, build, category) {
  if (!parts) return []
  return parts.map(part => {
    const issues = checkCompatibility({ ...build, [category]: part })
      .filter(i => i.category === category)
    return {
      ...part,
      compatible: issues.length === 0,
      issues: issues
    }
  })
}

export function getRecommendedPsu(build) {
  const { cpu, gpu, ssd, hdd } = build
  const basePower = 50
  const cpuPower = cpu ? cpu.tdp : 0
  const gpuPower = gpu ? gpu.tdp : 0
  const storagePower = (ssd ? 7 : 0) + (hdd ? 7 : 0)
  const totalPower = basePower + cpuPower + gpuPower + storagePower
  return Math.ceil(totalPower / 0.75)
}
