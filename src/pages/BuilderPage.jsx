import { useState } from 'react'
import { useBuildContext } from '../context/BuildContext'
import { useSavedBuilds } from '../hooks/useSavedBuilds'
import PCModel from '../components/Builder/PCModel'
import CategorySidebar from '../components/Builder/CategorySidebar'
import PartSelector from '../components/Builder/PartSelector'
import BuildSummary from '../components/Builder/BuildSummary'

export default function BuilderPage() {
  const { build, selectPart, removePart, compatibilityIssues, selectedCount, isComplete, isPartRequired } = useBuildContext()
  const { saveBuild } = useSavedBuilds()
  const [activeCategory, setActiveCategory] = useState(null)
  const [showSummary, setShowSummary] = useState(false)

  const handleSave = (name) => {
    saveBuild(build, name)
  }

  const errorCount = compatibilityIssues.filter(i => i.type === 'error').length
  const warningCount = compatibilityIssues.filter(i => i.type === 'warning').length

  return (
    <div className="h-[calc(100vh-56px)] flex gap-4 p-4">
      {/* Left Column - Category Sidebar */}
      <div className="w-28 shrink-0 rounded-2xl overflow-hidden border border-border bg-bg-card">
        <CategorySidebar
          build={build}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          isPartRequired={isPartRequired}
        />
      </div>

      {/* Middle Column - Part Selector */}
      <div className="w-96 shrink-0 rounded-2xl overflow-hidden border border-border bg-bg-card">
        <PartSelector
          build={build}
          selectPart={selectPart}
          removePart={removePart}
          activeCategory={activeCategory}
          isPartRequired={isPartRequired}
        />
      </div>

      {/* Right Column - 3D Model */}
      <div className="flex-1 flex flex-col min-w-0 gap-4">
        <div className="flex-1 rounded-2xl overflow-hidden border border-border bg-bg-card relative">
          <PCModel build={build} activeCategory={activeCategory} />

          {/* Overlay info */}
          <div className="absolute top-4 left-4 right-4 pointer-events-none">
            <div className="flex items-start justify-between">
              <div className="bg-bg-primary/80 backdrop-blur-sm border border-border rounded-lg px-4 py-2 pointer-events-auto">
                <div className="text-xs text-text-muted">已选配件</div>
                <div className="text-lg font-bold text-accent">{selectedCount}<span className="text-text-muted text-sm">/12</span></div>
              </div>

              {(errorCount > 0 || warningCount > 0) && (
                <div className={`px-3 py-1.5 rounded-lg text-xs font-medium pointer-events-auto ${
                  errorCount > 0
                    ? 'bg-danger/10 border border-danger/20 text-danger'
                    : 'bg-warning/10 border border-warning/20 text-warning'
                }`}>
                  {errorCount > 0 ? `${errorCount} 个兼容性问题` : `${warningCount} 个警告`}
                </div>
              )}
            </div>
          </div>

          {/* Controls hint */}
          <div className="absolute bottom-4 left-4 pointer-events-none">
            <div className="text-xs text-text-muted/60">
              拖动旋转 · 滚轮缩放
            </div>
          </div>
        </div>

        {/* Bottom action bar */}
        <div className="px-6 py-4 border border-border bg-bg-card rounded-xl">
          <div className="flex items-center justify-between max-w-2xl mx-auto">
            <div className="text-sm text-text-muted">
              {isComplete ? (
                <span className="text-success">✓ 所有必填配件已选</span>
              ) : (
                <span>还需选择配件</span>
              )}
            </div>
            <button
              onClick={() => setShowSummary(true)}
              disabled={selectedCount === 0}
              className="px-6 py-2.5 bg-accent text-bg-primary font-medium text-sm rounded-lg hover:bg-accent/90 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              {isComplete ? '查看配置单' : '查看清单'}
            </button>
          </div>
        </div>
      </div>

      {/* Build Summary Modal */}
      {showSummary && (
        <BuildSummary
          build={build}
          compatibilityIssues={compatibilityIssues}
          onClose={() => setShowSummary(false)}
          onSave={handleSave}
        />
      )}
    </div>
  )
}
