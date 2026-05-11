import { useState } from 'react'
import { peripheralCategories } from '../data/peripherals'

function getFireIcons(score) {
  if (score >= 90) return '🔥🔥🔥🔥🔥'
  if (score >= 85) return '🔥🔥🔥🔥'
  if (score >= 80) return '🔥🔥🔥'
  if (score >= 75) return '🔥🔥'
  return '🔥'
}

function getTierBadge(tier) {
  const colors = {
    '旗舰': 'bg-purple/20 text-purple border-purple/30',
    '高端': 'bg-accent-dim text-accent border-accent/30',
    '中高端': 'bg-blue-500/10 text-blue-400 border-blue-500/30',
    '中端': 'bg-success/10 text-success border-success/30',
    '入门': 'bg-gray-500/10 text-gray-400 border-gray-500/30',
  }
  return colors[tier] || 'bg-gray-500/10 text-gray-400 border-gray-500/30'
}

export default function PeripheralsPage() {
  const [activeTab, setActiveTab] = useState('mouse')
  const [searchTerm, setSearchTerm] = useState('')

  const category = peripheralCategories.find(c => c.id === activeTab)

  const filteredData = category?.data.filter(item => {
    if (!searchTerm) return true
    const term = searchTerm.toLowerCase()
    return item.model.toLowerCase().includes(term) ||
           item.brand.toLowerCase().includes(term)
  }) || []

  const getCardFields = (item) => {
    switch (activeTab) {
      case 'mouse':
        return [
          { label: '传感器', value: item.sensor },
          { label: '重量', value: `${item.weight}g` },
          { label: '连接', value: item.connection },
        ]
      case 'keyboard':
        return [
          { label: '配列', value: item.layout },
          { label: '轴体', value: item.switch },
          { label: '连接', value: item.connection },
          { label: '热插拔', value: item.hotSwap ? '支持' : '不支持' },
        ]
      case 'headset':
        return [
          { label: '类型', value: item.type },
          { label: '单元', value: item.driver },
          { label: '频响', value: item.frequency },
          { label: '阻抗', value: `${item.impedance}Ω` },
        ]
      case 'mousepad':
        return [
          { label: '尺寸', value: item.size },
          { label: '表面', value: item.surface },
          { label: '厚度', value: `${item.thickness}mm` },
        ]
      case 'controller':
        return [
          { label: '连接', value: item.connection },
          { label: '特性', value: item.features },
        ]
      default:
        return []
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-text-primary">外设排行</h1>
        <p className="text-sm text-text-muted mt-1">综合性能、口碑与热门程度的外设推荐</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 overflow-x-auto pb-2 mb-6 border-b border-border">
        {peripheralCategories.map(cat => (
          <button
            key={cat.id}
            onClick={() => { setActiveTab(cat.id); setSearchTerm('') }}
            className={`px-4 py-2.5 text-sm font-medium rounded-t-lg whitespace-nowrap transition-all ${
              activeTab === cat.id
                ? 'text-accent border-b-2 border-accent bg-accent-dim/50'
                : 'text-text-secondary hover:text-text-primary hover:bg-bg-hover'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="mb-4">
        <input
          type="text"
          placeholder={`搜索${category?.name}型号...`}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md px-4 py-2 bg-bg-card border border-border rounded-lg text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent"
        />
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredData.map((item) => (
          <div
            key={item.rank}
            className="bg-bg-card border border-border rounded-xl p-4 hover:border-border-hover transition-colors"
          >
            {/* Rank & Brand/Model */}
            <div className="flex items-start gap-3 mb-3">
              <span className={`inline-flex items-center justify-center w-8 h-8 rounded-lg text-sm font-bold shrink-0 ${
                item.rank <= 3
                  ? 'bg-accent/20 text-accent'
                  : 'bg-bg-hover text-text-muted'
              }`}>
                {item.rank}
              </span>
              <div className="min-w-0">
                <div className="font-medium text-text-primary">{item.brand} {item.model}</div>
                <div className="text-xs text-text-muted mt-0.5">{item.type || ''}</div>
              </div>
            </div>

            {/* Specs */}
            <div className="space-y-1.5 mb-3">
              {getCardFields(item).map(field => (
                <div key={field.label} className="flex justify-between text-xs">
                  <span className="text-text-muted">{field.label}</span>
                  <span className="text-text-secondary truncate max-w-[60%]">{field.value}</span>
                </div>
              ))}
            </div>

            {/* Score & Tags */}
            <div className="flex items-center justify-between pt-3 border-t border-border">
              <div className="flex items-center gap-2">
                <div className="text-lg font-bold text-accent">{item.score}</div>
                <div className="text-sm">{getFireIcons(item.score)}</div>
              </div>
              <div className="flex gap-1">
                {item.tags.map(tag => (
                  <span key={tag} className={`text-[10px] px-1.5 py-0.5 rounded border ${getTierBadge(tag)}`}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredData.length === 0 && (
        <div className="text-center py-12 text-text-muted">
          未找到匹配的型号
        </div>
      )}
    </div>
  )
}
