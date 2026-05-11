import { categories } from '../../data/hardwareDB'
import { slotColors } from '../HardwareIcon'

export default function CategorySidebar({ build, activeCategory, setActiveCategory, isPartRequired }) {
  return (
    <div className="h-full flex flex-col">
      <div className="p-4 border-b border-border">
        <h2 className="text-base font-bold text-text-primary text-center">配件选择</h2>
        <p className="text-[10px] text-text-muted text-center mt-1">
          已选 {Object.values(build).filter(Boolean).length}/12
        </p>
      </div>

      <div className="flex-1 overflow-y-auto py-2 space-y-1">
        {categories.map((cat) => {
          const selectedPart = build[cat.id]
          const isActive = activeCategory === cat.id
          const color = slotColors[cat.id]
          const required = isPartRequired ? isPartRequired(cat.id) : cat.required

          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`w-full px-3 py-3 flex flex-col items-center gap-1.5 transition-all rounded-lg mx-2 ${
                isActive
                  ? 'bg-accent-dim/60'
                  : 'hover:bg-bg-hover'
              }`}
              style={{ width: 'calc(100% - 16px)' }}
            >
              {/* Icon dot */}
              <div
                className="w-3 h-3 rounded-full"
                style={{
                  backgroundColor: selectedPart ? color : 'transparent',
                  border: `2px solid ${color}`,
                  boxShadow: selectedPart ? `0 0 10px ${color}60` : 'none',
                }}
              />

              {/* Category name */}
              <span className={`text-xs font-medium ${isActive ? 'text-accent' : 'text-text-primary'}`}>
                {cat.name}
              </span>

              {/* Required badge */}
              {required && (
                <span className="text-[9px] px-1 py-0.5 rounded bg-danger/15 text-danger">
                  必填
                </span>
              )}

              {/* Selected indicator */}
              {selectedPart && (
                <span className="text-[9px] text-success truncate max-w-full px-1">
                  {selectedPart.model}
                </span>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}
