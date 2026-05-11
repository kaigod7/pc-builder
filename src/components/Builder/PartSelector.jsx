import { useState, useMemo } from 'react'
import { categories, getHardwareByCategory, getHardwareById } from '../../data/hardwareDB'
import { filterCompatibleParts } from '../../utils/compatibility'

const slotColors = {
  cpu: '#00d4ff',
  motherboard: '#a855f7',
  memory: '#f472b6',
  gpu: '#f59e0b',
  ssd: '#22c55e',
  hdd: '#6b7280',
  psu: '#ef4444',
  cooler: '#3b82f6',
  soundcard: '#ec4899',
  nic: '#8b5cf6',
  case: '#ffffff',
  monitor: '#10b981',
}

function getPartDisplayName(category, part) {
  if (!part) return '未选择'
  if (category === 'cpu') {
    return `${part.cores}核${part.threads}线程 · ${part.baseClock}~${part.boostClock}GHz · ${part.socket}`
  }
  if (category === 'motherboard') {
    return `${part.chipset} · ${part.memoryType} · ${part.formFactor} · ${part.m2Slots}个M.2`
  }
  if (category === 'memory') {
    return `${part.type} ${part.capacity}GB ${part.speed}MHz · ${part.latency}`
  }
  if (category === 'gpu') {
    return `${part.vram}GB ${part.vramType} · TDP ${part.tdp}W · PCIe ${part.pcieVersion}`
  }
  if (category === 'ssd') {
    return `${part.capacity}GB · 读${part.readSpeed}MB/s · 写${part.writeSpeed}MB/s`
  }
  if (category === 'hdd') {
    return `${part.capacity}GB · ${part.rpm}rpm · ${part.cache}MB缓存`
  }
  if (category === 'psu') {
    return `${part.wattage}W · ${part.efficiency} · ${part.modular}`
  }
  if (category === 'cooler') {
    return `${part.type} · TDP ${part.tdp}W · ${part.sockets.join('/')}`
  }
  if (category === 'case') {
    return `${part.formFactor} · GPU≤${part.maxGpuLength}mm · 散热≤${part.maxCoolerHeight}mm`
  }
  if (category === 'monitor') {
    return `${part.size}" · ${part.resolution} · ${part.refreshRate}Hz · ${part.panel}`
  }
  return part.model
}

function getShortName(category, part) {
  if (!part) return '未选择'
  if (category === 'cpu') return `${part.brand} ${part.model}`
  if (category === 'gpu') return `${part.brand} ${part.model}`
  if (category === 'memory') return `${part.brand} ${part.capacity}GB`
  if (category === 'ssd') return `${part.brand} ${part.capacity}GB`
  return `${part.brand} ${part.model}`
}

function getBrands(parts) {
  const brands = new Set()
  parts.forEach(p => brands.add(p.brand))
  return Array.from(brands).sort()
}

export default function PartSelector({ build, selectPart, removePart, activeCategory, setActiveCategory }) {
  const [expandedCategory, setExpandedCategory] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedBrand, setSelectedBrand] = useState('全部')

  const handleToggleCategory = (catId) => {
    const willExpand = expandedCategory !== catId
    setExpandedCategory(willExpand ? catId : null)
    setActiveCategory(willExpand ? catId : null)
    setSearchTerm('')
    setSelectedBrand('全部')
  }

  const getFilteredParts = (categoryId) => {
    let parts = getHardwareByCategory(categoryId)
    if (!parts) return []

    const partsWithCompatibility = filterCompatibleParts(parts, build, categoryId)

    if (selectedBrand !== '全部') {
      partsWithCompatibility.forEach(p => {
        if (p.brand !== selectedBrand && !p.compatible) {
          p._filteredByBrand = true
        }
      })
    }

    if (!searchTerm) return partsWithCompatibility

    const term = searchTerm.toLowerCase()
    return partsWithCompatibility.filter(p =>
      p.model.toLowerCase().includes(term) ||
      p.brand.toLowerCase().includes(term)
    )
  }

  const handleSelect = (category, part, isSelected) => {
    if (isSelected) {
      removePart(category)
    } else {
      selectPart(category, part)
      setExpandedCategory(null)
    }
  }

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-border">
        <h2 className="text-lg font-bold text-text-primary mb-1">配件选择</h2>
        <p className="text-xs text-text-muted">
          已选 {Object.values(build).filter(Boolean).length}/12 项
        </p>
      </div>

      {/* Category List */}
      <div className="flex-1 overflow-y-auto">
        {categories.map((cat) => {
          const selectedPart = build[cat.id]
          const isExpanded = expandedCategory === cat.id
          const color = slotColors[cat.id]
          const allParts = getHardwareByCategory(cat.id) || []
          const brands = useMemo(() => getBrands(allParts), [allParts])
          const filteredParts = getFilteredParts(cat.id)

          return (
            <div key={cat.id} className="border-b border-border/50">
              {/* Category Header */}
              <button
                onClick={() => handleToggleCategory(cat.id)}
                className={`w-full px-4 py-3 flex items-center justify-between transition-all ${
                  isExpanded ? 'bg-accent-dim/50' : 'hover:bg-bg-hover'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-2.5 h-2.5 rounded-full"
                    style={{
                      backgroundColor: selectedPart ? color : 'transparent',
                      border: `2px solid ${color}`,
                      boxShadow: selectedPart ? `0 0 8px ${color}` : 'none',
                    }}
                  />
                  <div className="text-left">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-text-primary">{cat.name}</span>
                      {cat.required && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-danger/20 text-danger">必填</span>
                      )}
                    </div>
                    <div className="text-xs text-text-muted mt-0.5 truncate max-w-[200px]">
                      {getShortName(cat.id, selectedPart)}
                    </div>
                  </div>
                </div>
                <svg
                  className={`w-4 h-4 text-text-muted transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Part List */}
              {isExpanded && (
                <div className="px-4 pb-3">
                  {/* Brand Filter */}
                  {brands.length > 0 && (
                    <div className="flex gap-1 mb-2 overflow-x-auto pb-1">
                      <button
                        onClick={() => setSelectedBrand('全部')}
                        className={`px-2 py-1 text-[10px] rounded-full whitespace-nowrap transition-colors ${
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
                          className={`px-2 py-1 text-[10px] rounded-full whitespace-nowrap transition-colors ${
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
                  <div className="relative mb-2">
                    <input
                      type="text"
                      placeholder="搜索型号..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full px-3 py-1.5 text-xs bg-bg-primary border border-border rounded-lg text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent"
                    />
                  </div>

                  {/* Parts */}
                  <div className="space-y-1 max-h-[280px] overflow-y-auto">
                    {filteredParts.length === 0 && (
                      <div className="text-center py-4 text-xs text-text-muted">
                        未找到匹配的型号
                      </div>
                    )}
                    {filteredParts.map((part) => {
                      const isSelected = selectedPart?.id === part.id
                      const isCompatible = part.compatible
                      const filteredByBrand = part._filteredByBrand

                      return (
                        <button
                          key={part.id}
                          onClick={() => handleSelect(cat.id, part, isSelected)}
                          disabled={!isCompatible && !isSelected}
                          className={`w-full px-3 py-2 rounded-lg text-left text-xs transition-all ${
                            isSelected
                              ? 'bg-accent-dim border border-accent/30'
                              : isCompatible && !filteredByBrand
                                ? 'hover:bg-bg-hover border border-transparent'
                                : 'opacity-40 cursor-not-allowed border border-transparent'
                          }`}
                        >
                          <div className="font-medium text-text-primary">
                            {part.brand} {part.model}
                          </div>
                          <div className="text-text-muted mt-0.5">
                            {getPartDisplayName(cat.id, part)}
                          </div>
                          {!isCompatible && part.issues?.length > 0 && (
                            <div className="text-danger text-[10px] mt-1">
                              {part.issues.map(i => i.message).join('；')}
                            </div>
                          )}
                        </button>
                      )
                    })}
                  </div>

                  {/* Clear selection */}
                  {selectedPart && !cat.required && (
                    <button
                      onClick={() => removePart(cat.id)}
                      className="w-full mt-2 py-1.5 text-xs text-text-muted hover:text-danger transition-colors"
                    >
                      清除选择
                    </button>
                  )}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
