import { useState } from 'react'
import { rankingCategories } from '../data/rankings'

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

export default function RankingsPage() {
  const [activeTab, setActiveTab] = useState('cpu')
  const [searchTerm, setSearchTerm] = useState('')

  const category = rankingCategories.find(c => c.id === activeTab)

  const filteredData = category?.data.filter(item => {
    if (!searchTerm) return true
    const term = searchTerm.toLowerCase()
    return item.model.toLowerCase().includes(term) ||
           item.brand.toLowerCase().includes(term)
  }) || []

  const renderTable = () => {
    switch (activeTab) {
      case 'cpu':
        return (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-text-muted">
                  <th className="text-left px-4 py-3 font-medium w-16">排名</th>
                  <th className="text-left px-4 py-3 font-medium">型号</th>
                  <th className="text-left px-4 py-3 font-medium">核心/线程</th>
                  <th className="text-left px-4 py-3 font-medium">频率</th>
                  <th className="text-left px-4 py-3 font-medium">插槽</th>
                  <th className="text-left px-4 py-3 font-medium">TDP</th>
                  <th className="text-left px-4 py-3 font-medium">跑分</th>
                  <th className="text-left px-4 py-3 font-medium">标签</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((item) => (
                  <tr key={item.rank} className="border-b border-border/50 hover:bg-bg-hover transition-colors">
                    <td className="px-4 py-3">
                      <span className={`inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold ${
                        item.rank <= 3 ? 'bg-accent/20 text-accent' : 'bg-bg-hover text-text-muted'
                      }`}>
                        {item.rank}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="font-medium text-text-primary">{item.brand} {item.model}</div>
                    </td>
                    <td className="px-4 py-3 text-text-secondary">{item.cores}/{item.threads}</td>
                    <td className="px-4 py-3 text-text-secondary">{item.baseClock}~{item.boostClock}GHz</td>
                    <td className="px-4 py-3 text-text-secondary">{item.socket}</td>
                    <td className="px-4 py-3 text-text-secondary">{item.tdp}W</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className="w-20 h-2 bg-bg-hover rounded-full overflow-hidden">
                          <div className="h-full bg-accent rounded-full" style={{ width: `${(item.score / 70000) * 100}%` }} />
                        </div>
                        <span className="text-accent font-medium">{item.score.toLocaleString()}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex gap-1 flex-wrap">
                        {item.tags.map(tag => (
                          <span key={tag} className={`text-[10px] px-1.5 py-0.5 rounded border ${getTierBadge(tag)}`}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )

      case 'gpu':
        return (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-text-muted">
                  <th className="text-left px-4 py-3 font-medium w-16">排名</th>
                  <th className="text-left px-4 py-3 font-medium">型号</th>
                  <th className="text-left px-4 py-3 font-medium">显存</th>
                  <th className="text-left px-4 py-3 font-medium">类型</th>
                  <th className="text-left px-4 py-3 font-medium">TDP</th>
                  <th className="text-left px-4 py-3 font-medium">跑分</th>
                  <th className="text-left px-4 py-3 font-medium">标签</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((item) => (
                  <tr key={item.rank} className="border-b border-border/50 hover:bg-bg-hover transition-colors">
                    <td className="px-4 py-3">
                      <span className={`inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold ${
                        item.rank <= 3 ? 'bg-accent/20 text-accent' : 'bg-bg-hover text-text-muted'
                      }`}>
                        {item.rank}
                      </span>
                    </td>
                    <td className="px-4 py-3 font-medium text-text-primary">{item.brand} {item.model}</td>
                    <td className="px-4 py-3 text-text-secondary">{item.vram}GB {item.vramType}</td>
                    <td className="px-4 py-3 text-text-secondary">{item.vramType}</td>
                    <td className="px-4 py-3 text-text-secondary">{item.tdp}W</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className="w-20 h-2 bg-bg-hover rounded-full overflow-hidden">
                          <div className="h-full bg-accent rounded-full" style={{ width: `${(item.score / 100000) * 100}%` }} />
                        </div>
                        <span className="text-accent font-medium">{item.score.toLocaleString()}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex gap-1 flex-wrap">
                        {item.tags.map(tag => (
                          <span key={tag} className={`text-[10px] px-1.5 py-0.5 rounded border ${getTierBadge(tag)}`}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )

      case 'memory':
        return (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-text-muted">
                  <th className="text-left px-4 py-3 font-medium w-16">排名</th>
                  <th className="text-left px-4 py-3 font-medium">型号</th>
                  <th className="text-left px-4 py-3 font-medium">类型</th>
                  <th className="text-left px-4 py-3 font-medium">容量</th>
                  <th className="text-left px-4 py-3 font-medium">频率</th>
                  <th className="text-left px-4 py-3 font-medium">时序</th>
                  <th className="text-left px-4 py-3 font-medium">评分</th>
                  <th className="text-left px-4 py-3 font-medium">标签</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((item) => (
                  <tr key={item.rank} className="border-b border-border/50 hover:bg-bg-hover transition-colors">
                    <td className="px-4 py-3">
                      <span className={`inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold ${
                        item.rank <= 3 ? 'bg-accent/20 text-accent' : 'bg-bg-hover text-text-muted'
                      }`}>
                        {item.rank}
                      </span>
                    </td>
                    <td className="px-4 py-3 font-medium text-text-primary">{item.brand} {item.model}</td>
                    <td className="px-4 py-3 text-text-secondary">{item.type}</td>
                    <td className="px-4 py-3 text-text-secondary">{item.capacity}GB</td>
                    <td className="px-4 py-3 text-text-secondary">{item.speed}MHz</td>
                    <td className="px-4 py-3 text-text-secondary">{item.latency}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-2 bg-bg-hover rounded-full overflow-hidden">
                          <div className="h-full bg-accent rounded-full" style={{ width: `${item.score}%` }} />
                        </div>
                        <span className="text-accent font-medium">{item.score}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex gap-1 flex-wrap">
                        {item.tags.map(tag => (
                          <span key={tag} className={`text-[10px] px-1.5 py-0.5 rounded border ${getTierBadge(tag)}`}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )

      case 'ssd':
        return (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-text-muted">
                  <th className="text-left px-4 py-3 font-medium w-16">排名</th>
                  <th className="text-left px-4 py-3 font-medium">型号</th>
                  <th className="text-left px-4 py-3 font-medium">接口</th>
                  <th className="text-left px-4 py-3 font-medium">容量</th>
                  <th className="text-left px-4 py-3 font-medium">读取</th>
                  <th className="text-left px-4 py-3 font-medium">写入</th>
                  <th className="text-left px-4 py-3 font-medium">评分</th>
                  <th className="text-left px-4 py-3 font-medium">标签</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((item) => (
                  <tr key={item.rank} className="border-b border-border/50 hover:bg-bg-hover transition-colors">
                    <td className="px-4 py-3">
                      <span className={`inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold ${
                        item.rank <= 3 ? 'bg-accent/20 text-accent' : 'bg-bg-hover text-text-muted'
                      }`}>
                        {item.rank}
                      </span>
                    </td>
                    <td className="px-4 py-3 font-medium text-text-primary">{item.brand} {item.model}</td>
                    <td className="px-4 py-3 text-text-secondary">{item.interface} PCIe {item.pcieVersion}</td>
                    <td className="px-4 py-3 text-text-secondary">{item.capacity}GB</td>
                    <td className="px-4 py-3 text-text-secondary">{item.readSpeed.toLocaleString()}MB/s</td>
                    <td className="px-4 py-3 text-text-secondary">{item.writeSpeed.toLocaleString()}MB/s</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-2 bg-bg-hover rounded-full overflow-hidden">
                          <div className="h-full bg-accent rounded-full" style={{ width: `${item.score}%` }} />
                        </div>
                        <span className="text-accent font-medium">{item.score}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex gap-1 flex-wrap">
                        {item.tags.map(tag => (
                          <span key={tag} className={`text-[10px] px-1.5 py-0.5 rounded border ${getTierBadge(tag)}`}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )

      default:
        // Generic table for psu, cooler, monitor
        return (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-text-muted">
                  {category?.columns.map(col => (
                    <th key={col} className="text-left px-4 py-3 font-medium">{col}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filteredData.map((item) => (
                  <tr key={item.rank} className="border-b border-border/50 hover:bg-bg-hover transition-colors">
                    <td className="px-4 py-3">
                      <span className={`inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold ${
                        item.rank <= 3 ? 'bg-accent/20 text-accent' : 'bg-bg-hover text-text-muted'
                      }`}>
                        {item.rank}
                      </span>
                    </td>
                    <td className="px-4 py-3 font-medium text-text-primary">{item.brand} {item.model}</td>
                    {Object.keys(item).filter(k => !['rank', 'brand', 'model', 'score', 'tags'].includes(k)).map(k => (
                      <td key={k} className="px-4 py-3 text-text-secondary">{item[k]}</td>
                    ))}
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-2 bg-bg-hover rounded-full overflow-hidden">
                          <div className="h-full bg-accent rounded-full" style={{ width: `${item.score}%` }} />
                        </div>
                        <span className="text-accent font-medium">{item.score}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex gap-1 flex-wrap">
                        {item.tags.map(tag => (
                          <span key={tag} className={`text-[10px] px-1.5 py-0.5 rounded border ${getTierBadge(tag)}`}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-text-primary">硬件性能排行</h1>
        <p className="text-sm text-text-muted mt-1">数据综合参考 PassMark、UserBenchmark、3DMark 等公开跑分平台</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 overflow-x-auto pb-2 mb-6 border-b border-border">
        {rankingCategories.map(cat => (
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

      {/* Table */}
      <div className="bg-bg-card border border-border rounded-xl overflow-hidden">
        {filteredData.length > 0 ? renderTable() : (
          <div className="text-center py-12 text-text-muted">
            未找到匹配的型号
          </div>
        )}
      </div>
    </div>
  )
}
