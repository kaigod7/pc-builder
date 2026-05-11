import { useState } from 'react'
import { useBuildContext } from '../context/BuildContext'
import { useSavedBuilds } from '../hooks/useSavedBuilds'
import PCModel from '../components/Builder/PCModel'
import PartSelector from '../components/Builder/PartSelector'
import BuildSummary from '../components/Builder/BuildSummary'

export default function BuilderPage() {
  const { build, selectPart, removePart, compatibilityIssues, selectedCount, isComplete } = useBuildContext()
  const { saveBuild } = useSavedBuilds()
  const [activeCategory, setActiveCategory] = useState(null)
  const [showSummary, setShowSummary] = useState(false)
  const [showMobilePanel, setShowMobilePanel] = useState(false)

  const handleSave = (name) => {
    saveBuild(build, name)
  }

  const handleSelectPart = (cat, part) => {
    selectPart(cat, part)
    setShowMobilePanel(false)
  }

  const errorCount = compatibilityIssues.filter(i => i.type === 'error').length
  const warningCount = compatibilityIssues.filter(i => i.type === 'warning').length

  return (
    <div className="h-[calc(100vh-56px)] flex px-4 sm:px-6 lg:px-8 xl:px-12 gap-4 py-4">
      {/* Left Panel - Part Selector (Desktop) */}
      <div className="w-1/2 max-w-xl hidden md:block">
        <div className="h-full rounded-2xl overflow-hidden border border-border bg-bg-card">
          <PartSelector
            build={build}
            selectPart={selectPart}
            removePart={removePart}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        </div>
      </div>

      {/* Mobile Selector Panel */}
      {showMobilePanel && (
        <div className="md:hidden fixed inset-0 z-50 flex flex-col">
          <div className="flex-1 bg-black/60" onClick={() => setShowMobilePanel(false)} />
          <div className="bg-bg-card border-t border-border rounded-t-2xl max-h-[70vh] flex flex-col">
            <div className="flex items-center justify-between px-4 py-3 border-b border-border">
              <h3 className="text-sm font-medium text-text-primary">配件选择</h3>
              <button
                onClick={() => setShowMobilePanel(false)}
                className="p-1 text-text-muted hover:text-text-primary"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex-1 overflow-hidden">
              <PartSelector
                build={build}
                selectPart={handleSelectPart}
                removePart={removePart}
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
              />
            </div>
          </div>
        </div>
      )}

      {/* Mobile Selector Toggle */}
      <div className="md:hidden fixed bottom-20 right-4 z-40">
        <button
          onClick={() => setShowMobilePanel(true)}
          className="w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-lg"
        >
          <svg className="w-6 h-6 text-bg-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Right Panel - 3D Model + Controls */}
      <div className="flex-1 flex flex-col relative min-w-0">
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
        <div className="mt-4 px-6 py-4 border border-border bg-bg-card rounded-xl">
          <div className="flex items-center justify-between max-w-2xl mx-auto">
            <div className="text-sm text-text-muted">
              {isComplete ? (
                <span className="text-success">✓ 所有必填配件已选</span>
              ) : (
                <span>还需选择 {7 - selectedCount} 个必填配件</span>
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
