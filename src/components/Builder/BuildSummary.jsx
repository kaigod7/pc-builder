import { useState, useRef } from 'react'
import { exportAsImage, exportAsPDF } from '../../utils/export'

const slotLabels = {
  case: '机箱',
  cpu: 'CPU',
  motherboard: '主板',
  memory: '内存',
  gpu: '显卡',
  ssd: '固态硬盘',
  hdd: '机械硬盘',
  psu: '电源',
  cooler: '散热器',
  soundcard: '声卡',
  nic: '网卡',
  monitor: '显示器',
}

function getPartDetail(category, part) {
  if (!part) return null
  const details = []

  switch (category) {
    case 'cpu':
      details.push(`${part.cores}核${part.threads}线程`, `${part.baseClock}GHz~${part.boostClock}GHz`, `TDP ${part.tdp}W`, part.socket)
      break
    case 'motherboard':
      details.push(part.chipset, part.memoryType, part.formFactor, `${part.m2Slots}个M.2`)
      break
    case 'memory':
      details.push(`${part.capacity}GB`, `${part.speed}MHz`, part.latency, part.type)
      break
    case 'gpu':
      details.push(`${part.vram}GB ${part.vramType}`, `TDP ${part.tdp}W`, `PCIe ${part.pcieVersion}`)
      break
    case 'ssd':
      details.push(`${part.capacity}GB`, `读${part.readSpeed}MB/s`, `写${part.writeSpeed}MB/s`)
      break
    case 'hdd':
      details.push(`${part.capacity}GB`, `${part.rpm}rpm`, `${part.cache}MB缓存`)
      break
    case 'psu':
      details.push(`${part.wattage}W`, part.efficiency, part.modular)
      break
    case 'cooler':
      details.push(part.type, `TDP ${part.tdp}W`, part.sockets.join('/'))
      break
    case 'case':
      details.push(part.formFactor, `GPU≤${part.maxGpuLength}mm`, `散热≤${part.maxCoolerHeight}mm`)
      break
    case 'monitor':
      details.push(`${part.size}"`, part.resolution, `${part.refreshRate}Hz`, part.panel)
      break
    default:
      details.push(part.model)
  }

  return details.join(' · ')
}

export default function BuildSummary({ build, compatibilityIssues, onClose, onSave }) {
  const [buildName, setBuildName] = useState('')
  const [showExportOptions, setShowExportOptions] = useState(false)
  const summaryRef = useRef(null)

  const selectedParts = Object.entries(build)
    .filter(([, part]) => part !== null)
    .map(([category, part]) => ({
      category,
      label: slotLabels[category],
      name: `${part.brand} ${part.model}`,
      detail: getPartDetail(category, part),
    }))

  const handleSave = () => {
    onSave(buildName)
    onClose()
  }

  const handleExportImage = async () => {
    if (!summaryRef.current) return
    const success = await exportAsImage(summaryRef.current, `装机清单_${buildName || '未命名'}.png`)
    if (success) {
      alert('图片已导出')
    } else {
      alert('导出失败，请重试')
    }
  }

  const handleExportPDF = async () => {
    if (!summaryRef.current) return
    const success = await exportAsPDF(summaryRef.current, `装机清单_${buildName || '未命名'}.pdf`)
    if (success) {
      alert('PDF已导出')
    } else {
      alert('导出失败，请重试')
    }
  }

  const hasErrors = compatibilityIssues.some(i => i.type === 'error')
  const hasWarnings = compatibilityIssues.some(i => i.type === 'warning')

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-bg-card border border-border rounded-2xl w-full max-w-2xl max-h-[90vh] flex flex-col shadow-2xl">
        {/* Header */}
        <div className="p-6 border-b border-border flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-text-primary">装机清单</h2>
            <p className="text-sm text-text-muted mt-1">
              共 {selectedParts.length} 个配件
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-bg-hover rounded-lg transition-colors"
          >
            <svg className="w-5 h-5 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div ref={summaryRef} className="flex-1 overflow-y-auto p-6">
          {/* Compatibility Status */}
          {(hasErrors || hasWarnings) && (
            <div className="mb-4 space-y-2">
              {compatibilityIssues.map((issue, i) => (
                <div
                  key={i}
                  className={`px-4 py-2.5 rounded-lg text-sm flex items-center gap-2 ${
                    issue.type === 'error'
                      ? 'bg-danger/10 border border-danger/20 text-danger'
                      : 'bg-warning/10 border border-warning/20 text-warning'
                  }`}
                >
                  <span>{issue.type === 'error' ? '✕' : '⚠'}</span>
                  {issue.message}
                </div>
              ))}
            </div>
          )}

          {!hasErrors && !hasWarnings && selectedParts.length > 0 && (
            <div className="mb-4 px-4 py-2.5 rounded-lg bg-success/10 border border-success/20 text-success text-sm flex items-center gap-2">
              <span>✓</span>
              所有配件兼容性检查通过
            </div>
          )}

          {/* Parts List */}
          <div className="space-y-2">
            {selectedParts.map((part) => (
              <div
                key={part.category}
                className="flex items-start gap-3 p-3 rounded-lg bg-bg-primary border border-border"
              >
                <div className="w-16 shrink-0 text-xs font-medium text-text-muted pt-0.5">
                  {part.label}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-text-primary">{part.name}</div>
                  <div className="text-xs text-text-muted mt-0.5">{part.detail}</div>
                </div>
              </div>
            ))}

            {selectedParts.length === 0 && (
              <div className="text-center py-12 text-text-muted">
                尚未选择任何配件
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-border space-y-3">
          {/* Save section */}
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="方案名称（可选）"
              value={buildName}
              onChange={(e) => setBuildName(e.target.value)}
              className="flex-1 px-3 py-2 text-sm bg-bg-primary border border-border rounded-lg text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent"
            />
            <button
              onClick={handleSave}
              disabled={selectedParts.length === 0}
              className="px-5 py-2 bg-accent text-bg-primary font-medium text-sm rounded-lg hover:bg-accent/90 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              保存到 我的方案
            </button>
          </div>

          {/* Export buttons */}
          <div className="flex gap-2">
            <button
              onClick={() => setShowExportOptions(!showExportOptions)}
              className="flex-1 px-4 py-2 border border-border text-text-secondary text-sm rounded-lg hover:border-accent hover:text-accent transition-colors"
            >
              导出配置单
            </button>
          </div>

          {showExportOptions && (
            <div className="flex gap-2">
              <button
                onClick={handleExportImage}
                className="flex-1 px-4 py-2 bg-bg-hover text-text-secondary text-sm rounded-lg hover:bg-bg-hover/80 transition-colors"
              >
                导出为图片
              </button>
              <button
                onClick={handleExportPDF}
                className="flex-1 px-4 py-2 bg-bg-hover text-text-secondary text-sm rounded-lg hover:bg-bg-hover/80 transition-colors"
              >
                导出为 PDF
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
