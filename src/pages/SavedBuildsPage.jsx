import { useState } from 'react'
import { useSavedBuilds } from '../hooks/useSavedBuilds'
import { useBuildContext } from '../context/BuildContext'
import { useNavigate } from 'react-router-dom'

const slotLabels = {
  case: '机箱',
  cpu: 'CPU',
  motherboard: '主板',
  memory: '内存',
  gpu: '显卡',
  ssd: '固态硬盘',
  hdd: '机械硬盘',
  psu: '电源',
  cooler: 'CPU散热器',
  fan: '机箱风扇',
  soundcard: '声卡',
  nic: '网卡',
}

function formatDate(isoString) {
  const date = new Date(isoString)
  return date.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  })
}

export default function SavedBuildsPage() {
  const { builds, deleteBuild, renameBuild } = useSavedBuilds()
  const { loadBuild } = useBuildContext()
  const navigate = useNavigate()
  const [expandedBuild, setExpandedBuild] = useState(null)
  const [editingId, setEditingId] = useState(null)
  const [editName, setEditName] = useState('')

  const handleLoadBuild = (buildData) => {
    loadBuild(buildData.build)
    navigate('/')
  }

  const handleStartRename = (build) => {
    setEditingId(build.id)
    setEditName(build.name)
  }

  const handleConfirmRename = (id) => {
    if (editName.trim()) {
      renameBuild(id, editName.trim())
    }
    setEditingId(null)
    setEditName('')
  }

  const getBuildSummary = (build) => {
    const parts = []
    if (build.cpu) parts.push(`${build.cpu.brand} ${build.cpu.model}`)
    if (build.gpu) parts.push(`${build.gpu.brand} ${build.gpu.model}`)
    if (build.motherboard) parts.push(`${build.motherboard.brand} ${build.motherboard.model}`)
    return parts.join(' + ')
  }

  const getSelectedParts = (build) => {
    return Object.entries(build)
      .filter(([, part]) => part !== null)
      .map(([category, part]) => ({
        category,
        label: slotLabels[category],
        name: `${part.brand} ${part.model}`,
      }))
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-text-primary">我的方案</h1>
        <p className="text-sm text-text-muted mt-1">
          已保存 {builds.length} 个装机方案
        </p>
      </div>

      {/* Builds List */}
      {builds.length === 0 ? (
        <div className="text-center py-16 bg-bg-card border border-border rounded-xl">
          <div className="text-4xl mb-4">📦</div>
          <h3 className="text-lg font-medium text-text-primary mb-2">暂无保存的方案</h3>
          <p className="text-sm text-text-muted mb-4">
            在装机搭配页面选择配件并生成配置单后，可以保存到这里
          </p>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-2 bg-accent text-bg-primary font-medium text-sm rounded-lg hover:bg-accent/90 transition-colors"
          >
            去装机搭配
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          {builds.map((build) => {
            const isExpanded = expandedBuild === build.id
            const selectedParts = getSelectedParts(build.build)

            return (
              <div
                key={build.id}
                className="bg-bg-card border border-border rounded-xl overflow-hidden hover:border-border-hover transition-colors"
              >
                {/* Build Header */}
                <div
                  className="px-5 py-4 flex items-center justify-between cursor-pointer"
                  onClick={() => setExpandedBuild(isExpanded ? null : build.id)}
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3">
                      {editingId === build.id ? (
                        <input
                          type="text"
                          value={editName}
                          onChange={(e) => setEditName(e.target.value)}
                          onBlur={() => handleConfirmRename(build.id)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') handleConfirmRename(build.id)
                            if (e.key === 'Escape') setEditingId(null)
                          }}
                          autoFocus
                          className="px-2 py-1 text-sm bg-bg-primary border border-accent rounded text-text-primary focus:outline-none"
                          onClick={(e) => e.stopPropagation()}
                        />
                      ) : (
                        <h3
                          className="font-medium text-text-primary"
                          onClick={(e) => {
                            e.stopPropagation()
                            handleStartRename(build)
                          }}
                        >
                          {build.name}
                        </h3>
                      )}
                      <span className="text-xs text-text-muted">
                        {selectedParts.length} 个配件
                      </span>
                    </div>
                    <p className="text-xs text-text-muted mt-1 truncate">
                      {getBuildSummary(build.build)}
                    </p>
                    <p className="text-[10px] text-text-muted/60 mt-0.5">
                      保存于 {formatDate(build.createdAt)}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 ml-4">
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        handleLoadBuild(build)
                      }}
                      className="px-3 py-1.5 text-xs bg-accent text-bg-primary rounded-lg hover:bg-accent/90 transition-colors"
                    >
                      加载
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        if (confirm('确定删除这个方案吗？')) {
                          deleteBuild(build.id)
                        }
                      }}
                      className="p-1.5 text-text-muted hover:text-danger transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                    <svg
                      className={`w-5 h-5 text-text-muted transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="px-5 pb-4 border-t border-border">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
                      {selectedParts.map((part) => (
                        <div
                          key={part.category}
                          className="flex items-center gap-2 px-3 py-2 bg-bg-primary rounded-lg"
                        >
                          <span className="text-xs text-text-muted w-12 shrink-0">{part.label}</span>
                          <span className="text-sm text-text-primary truncate">{part.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
