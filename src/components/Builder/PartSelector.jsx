import { useState, useMemo } from 'react'
import { categories, getHardwareByCategory } from '../../data/hardwareDB'
import { filterCompatibleParts } from '../../utils/compatibility'
import { slotColors } from '../HardwareIcon'

function getPartColor(part) {
  if (part.color) return part.color
  const whiteKeywords = ['白', '银', '雪', 'Snow', 'White', 'Silver']
  const modelUpper = part.model.toUpperCase()
  if (whiteKeywords.some(k => modelUpper.includes(k.toUpperCase()))) return '白色'
  return '黑色'
}

function getPartDetailParams(category, part) {
  const params = []
  const color = getPartColor(part)

  switch (category) {
    case 'cpu':
      params.push(
        { label: '核心/线程', value: `${part.cores}/${part.threads}` },
        { label: '频率', value: `${part.baseClock}~${part.boostClock}GHz` },
        { label: '插槽', value: part.socket },
        { label: 'TDP', value: `${part.tdp}W` },
        { label: '核显', value: part.igpu || '无' },
        { label: '颜色', value: color },
      )
      break
    case 'motherboard':
      params.push(
        { label: '芯片组', value: part.chipset },
        { label: '内存支持', value: part.memoryType },
        { label: '板型', value: part.formFactor },
        { label: 'M.2插槽', value: `${part.m2Slots}个` },
        { label: 'PCIe', value: part.pcieVersion },
        { label: '颜色', value: color },
      )
      break
    case 'memory':
      params.push(
        { label: '类型', value: part.type },
        { label: '容量', value: `${part.capacity}GB` },
        { label: '频率', value: `${part.speed}MHz` },
        { label: '时序', value: part.latency },
        { label: '通道', value: `${part.channels}通道` },
        { label: '颜色', value: color },
      )
      break
    case 'gpu':
      params.push(
        { label: '显存', value: `${part.vram}GB ${part.vramType}` },
        { label: 'TDP', value: `${part.tdp}W` },
        { label: 'PCIe', value: part.pcieVersion },
        { label: '长度', value: `${part.length}mm` },
        { label: '颜色', value: color },
      )
      break
    case 'ssd':
      params.push(
        { label: '容量', value: `${part.capacity}GB` },
        { label: '接口', value: `${part.interface} PCIe ${part.pcieVersion}` },
        { label: '读取', value: `${part.readSpeed}MB/s` },
        { label: '写入', value: `${part.writeSpeed}MB/s` },
        { label: '颗粒', value: part.nandType },
        { label: '颜色', value: color },
      )
      break
    case 'hdd':
      params.push(
        { label: '容量', value: `${part.capacity}GB` },
        { label: '转速', value: `${part.rpm}rpm` },
        { label: '缓存', value: `${part.cache}MB` },
        { label: '尺寸', value: part.formFactor },
        { label: '颜色', value: color },
      )
      break
    case 'psu':
      params.push(
        { label: '功率', value: `${part.wattage}W` },
        { label: '认证', value: part.efficiency },
        { label: '模组', value: part.modular },
        { label: '尺寸', value: part.formFactor },
        { label: '颜色', value: color },
      )
      break
    case 'cooler':
      params.push(
        { label: '类型', value: part.type },
        { label: 'TDP', value: `${part.tdp}W` },
        { label: '支持插槽', value: part.sockets.join(' ') },
        { label: '风扇', value: `${part.fanSize}mm x${part.fanCount}` },
        { label: '颜色', value: color },
      )
      if (part.height) params.push({ label: '高度', value: `${part.height}mm` })
      if (part.radiatorSize) params.push({ label: '冷排', value: `${part.radiatorSize}mm` })
      break
    case 'case':
      params.push(
        { label: '板型支持', value: part.motherboardSupport.join('/') },
        { label: '显卡限长', value: `${part.maxGpuLength}mm` },
        { label: '散热限高', value: `${part.maxCoolerHeight}mm` },
        { label: '冷排支持', value: `${part.maxRadiator}mm` },
        { label: '颜色', value: color },
      )
      break
    case 'fan':
      params.push(
        { label: '尺寸', value: `${part.size}mm` },
        { label: '类型', value: part.type },
        { label: 'RGB', value: part.rgb ? '有' : '无' },
        { label: '风量', value: `${part.airflow}CFM` },
        { label: '噪音', value: `${part.noise}dB` },
        { label: '颜色', value: color },
      )
      break
    case 'soundcard':
      params.push(
        { label: '接口', value: part.interface },
        { label: '声道', value: part.channels },
        { label: '采样率', value: part.sampleRate },
        { label: '颜色', value: color },
      )
      break
    case 'nic':
      params.push(
        { label: '接口', value: part.interface },
        { label: '速率', value: part.speed },
        { label: '颜色', value: color },
      )
      break
  }
  return params
}

function getBrands(parts) {
  const brands = new Set()
  parts.forEach(p => brands.add(p.brand))
  return Array.from(brands).sort()
}

export default function PartSelector({ build, selectPart, removePart, activeCategory, isPartRequired }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedBrand, setSelectedBrand] = useState('全部')

  const activeCatObj = categories.find(c => c.id === activeCategory)
  const activeColor = activeCategory ? slotColors[activeCategory] : '#00d4ff'

  const allParts = useMemo(() => getHardwareByCategory(activeCategory) || [], [activeCategory])
  const brands = useMemo(() => getBrands(allParts), [allParts])

  const activeParts = useMemo(() => {
    let parts = getHardwareByCategory(activeCategory) || []
    if (!parts.length) return []

    const partsWithCompat = filterCompatibleParts(parts, build, activeCategory)

    let result = partsWithCompat
    if (selectedBrand !== '全部') {
      result = result.filter(p => p.brand === selectedBrand)
    }

    if (searchTerm) {
      const term = searchTerm.toLowerCase()
      result = result.filter(p =>
        p.model.toLowerCase().includes(term) ||
        p.brand.toLowerCase().includes(term)
      )
    }

    return result
  }, [activeCategory, build, selectedBrand, searchTerm])

  const handleSelectPart = (part) => {
    const currentSelected = build[activeCategory]
    if (currentSelected?.id === part.id) {
      removePart(activeCategory)
    } else {
      selectPart(activeCategory, part)
    }
  }

  if (!activeCategory || !activeCatObj) {
    return (
      <div className="h-full flex items-center justify-center text-text-muted text-sm"
      >
        点击左侧分类选择配件
      </div>
    )
  }

  return (
    <div className="h-full flex flex-col"
    >
      {/* Header */}
      <div className="p-4 border-b border-border"
      >
        <div className="flex items-center gap-2 mb-2"
        >
          <div className="w-1 h-5 rounded-full" style={{ backgroundColor: activeColor }} />
          <h3 className="text-base font-bold text-text-primary"
          >{activeCatObj.name}</h3
          >
          <span className="text-xs text-text-muted"
          >({activeParts.length})</span
          >
          {isPartRequired && isPartRequired(activeCategory) && (
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-danger/20 text-danger"
            >必填</span
            >
          )}
        </div>

        {/* Brand Filter */}
        {brands.length > 0 && (
          <div className="flex gap-1 overflow-x-auto pb-1"
          >
            <button
              onClick={() => setSelectedBrand('全部')}
              className={`px-2.5 py-1 text-[11px] rounded-full whitespace-nowrap transition-colors ${
                selectedBrand === '全部'
                  ? 'bg-accent text-bg-primary'
                  : 'bg-bg-primary text-text-muted hover:text-text-primary border border-border'
              }`}
            >
              全部
            </button>
            {brands.map(brand => (
              <button
                key={brand}
                onClick={() => setSelectedBrand(brand)}
                className={`px-2.5 py-1 text-[11px] rounded-full whitespace-nowrap transition-colors ${
                  selectedBrand === brand
                    ? 'bg-accent text-bg-primary'
                    : 'bg-bg-primary text-text-muted hover:text-text-primary border border-border'
                }`}
              >
                {brand}
              </button>
            ))}
          </div>
        )}

        {/* Search */}
        <div className="relative mt-2"
        >
          <input
            type="text"
            placeholder={`搜索${activeCatObj.name}型号...`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-3 py-2 text-xs bg-bg-primary border border-border rounded-lg text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent"
          />
        </div>
      </div>

      {/* Parts Grid */}
      <div className="flex-1 overflow-y-auto p-3 space-y-2"
      >
        {activeParts.length === 0 && (
          <div className="text-center py-8 text-xs text-text-muted"
          >
            未找到匹配的型号
          </div>
        )}
        {activeParts.map((part) => {
          const isSelected = build[activeCategory]?.id === part.id
          const isCompatible = part.compatible
          const params = getPartDetailParams(activeCategory, part)

          return (
            <button
              key={part.id}
              onClick={() => handleSelectPart(part)}
              disabled={!isCompatible && !isSelected}
              className={`w-full text-left p-3 rounded-xl transition-all ${
                isSelected
                  ? 'bg-accent-dim border-2 border-accent/50'
                  : isCompatible
                    ? 'bg-bg-primary border border-border hover:border-accent/30'
                    : 'bg-bg-primary border border-border opacity-40 cursor-not-allowed'
              }`}
            >
              {/* Title */}
              <div className="flex items-center justify-between mb-2"
              >
                <span className="text-sm font-bold text-text-primary"
                >
                  {part.brand} {part.model}
                </span
                >
                {part.tier && (
                  <span className={`text-[10px] px-1.5 py-0.5 rounded ${
                    part.tier === '旗舰' ? 'bg-purple/20 text-purple' :
                    part.tier === '高端' ? 'bg-accent-dim text-accent' :
                    part.tier === '中高端' ? 'bg-blue-500/10 text-blue-400' :
                    part.tier === '中端' ? 'bg-success/10 text-success' :
                    'bg-gray-500/10 text-gray-400'
                  }`}
                  >
                    {part.tier}
                  </span
                  >
                )}
              </div>

              {/* Params Grid */}
              <div className="grid grid-cols-3 gap-x-2 gap-y-1"
              >
                {params.map((p, i) => (
                  <div key={i} className="flex items-center gap-1 min-w-0"
                  >
                    <span className="text-[10px] text-text-muted shrink-0"
                    >{p.label}</span
                    >
                    <span className="text-[10px] text-text-secondary truncate"
                    >{p.value}</span
                    >
                  </div
                  >
                ))}
              </div>

              {/* Compatibility issues */}
              {!isCompatible && part.issues?.length > 0 && (
                <div className="mt-2 text-danger text-[10px]"
                >
                  {part.issues.map(i => i.message).join('；')}
                </div
                >
              )}
            </button
            >
          )
        })}
      </div
      >

      {/* Clear selection */}
      {build[activeCategory] && activeCatObj && !activeCatObj.required && (
        <div className="p-3 border-t border-border"
        >
          <button
            onClick={() => removePart(activeCategory)}
            className="w-full py-2 text-xs text-text-muted hover:text-danger transition-colors border border-border rounded-lg"
          >
            清除当前选择
          </button
          >
        </div
        >
      )}
    </div
    >
  )
}
