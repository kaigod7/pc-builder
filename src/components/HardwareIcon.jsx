// Unified hardware icons - same style for visual consistency

export const HardwareIcon = ({ category, className = "w-12 h-12", color = "currentColor" }) => {
  const icons = {
    case: (
      <svg viewBox="0 0 64 64" fill="none" stroke={color} strokeWidth="2" className={className}>
        <rect x="14" y="6" width="36" height="52" rx="3" />
        <line x1="14" y1="18" x2="50" y2="18" />
        <circle cx="20" cy="12" r="1.5" fill={color} />
        <circle cx="26" cy="12" r="1.5" />
        <rect x="20" y="24" width="24" height="2" />
        <rect x="20" y="30" width="24" height="2" />
        <rect x="20" y="44" width="14" height="8" rx="1" />
      </svg>
    ),
    cpu: (
      <svg viewBox="0 0 64 64" fill="none" stroke={color} strokeWidth="2" className={className}>
        <rect x="16" y="16" width="32" height="32" rx="2" />
        <rect x="22" y="22" width="20" height="20" rx="1" fill={color} fillOpacity="0.15" />
        {[20, 28, 36].map(p => (
          <g key={p}>
            <line x1={p} y1="10" x2={p} y2="16" />
            <line x1={p + 8} y1="10" x2={p + 8} y2="16" />
            <line x1={p} y1="48" x2={p} y2="54" />
            <line x1={p + 8} y1="48" x2={p + 8} y2="54" />
            <line x1="10" y1={p} x2="16" y2={p} />
            <line x1="10" y1={p + 8} x2="16" y2={p + 8} />
            <line x1="48" y1={p} x2="54" y2={p} />
            <line x1="48" y1={p + 8} x2="54" y2={p + 8} />
          </g>
        ))}
      </svg>
    ),
    motherboard: (
      <svg viewBox="0 0 64 64" fill="none" stroke={color} strokeWidth="2" className={className}>
        <rect x="6" y="8" width="52" height="48" rx="2" />
        <rect x="12" y="14" width="12" height="12" rx="1" fill={color} fillOpacity="0.2" />
        <rect x="30" y="14" width="3" height="14" />
        <rect x="35" y="14" width="3" height="14" />
        <rect x="40" y="14" width="3" height="14" />
        <rect x="45" y="14" width="3" height="14" />
        <rect x="12" y="34" width="36" height="3" />
        <rect x="12" y="40" width="36" height="3" />
        <rect x="12" y="46" width="20" height="3" />
        <circle cx="52" cy="36" r="2" fill={color} fillOpacity="0.3" />
        <circle cx="52" cy="44" r="2" />
      </svg>
    ),
    memory: (
      <svg viewBox="0 0 64 64" fill="none" stroke={color} strokeWidth="2" className={className}>
        <rect x="4" y="22" width="56" height="20" rx="1" />
        <rect x="8" y="26" width="6" height="12" fill={color} fillOpacity="0.2" />
        <rect x="16" y="26" width="6" height="12" fill={color} fillOpacity="0.2" />
        <rect x="24" y="26" width="6" height="12" fill={color} fillOpacity="0.2" />
        <rect x="32" y="26" width="6" height="12" fill={color} fillOpacity="0.2" />
        <rect x="40" y="26" width="6" height="12" fill={color} fillOpacity="0.2" />
        <rect x="48" y="26" width="6" height="12" fill={color} fillOpacity="0.2" />
        {Array.from({length: 14}).map((_, i) => (
          <line key={i} x1={6 + i * 3.8} y1="44" x2={6 + i * 3.8} y2="46" />
        ))}
      </svg>
    ),
    gpu: (
      <svg viewBox="0 0 64 64" fill="none" stroke={color} strokeWidth="2" className={className}>
        <rect x="4" y="22" width="56" height="22" rx="1" />
        <rect x="8" y="26" width="48" height="14" rx="1" fill={color} fillOpacity="0.1" />
        <circle cx="18" cy="33" r="6" />
        <circle cx="18" cy="33" r="2" fill={color} />
        <line x1="14" y1="33" x2="22" y2="33" />
        <line x1="18" y1="29" x2="18" y2="37" />
        <circle cx="40" cy="33" r="6" />
        <circle cx="40" cy="33" r="2" fill={color} />
        <line x1="36" y1="33" x2="44" y2="33" />
        <line x1="40" y1="29" x2="40" y2="37" />
        {Array.from({length: 12}).map((_, i) => (
          <line key={i} x1={6 + i * 4} y1="46" x2={6 + i * 4} y2="48" />
        ))}
      </svg>
    ),
    ssd: (
      <svg viewBox="0 0 64 64" fill="none" stroke={color} strokeWidth="2" className={className}>
        <rect x="4" y="26" width="56" height="14" rx="1" />
        <rect x="10" y="29" width="8" height="8" rx="0.5" fill={color} fillOpacity="0.3" />
        <rect x="22" y="29" width="8" height="8" rx="0.5" fill={color} fillOpacity="0.3" />
        <rect x="34" y="29" width="8" height="8" rx="0.5" fill={color} fillOpacity="0.3" />
        <rect x="46" y="29" width="8" height="8" rx="0.5" fill={color} fillOpacity="0.3" />
        <circle cx="58" cy="33" r="1" fill={color} />
      </svg>
    ),
    hdd: (
      <svg viewBox="0 0 64 64" fill="none" stroke={color} strokeWidth="2" className={className}>
        <rect x="10" y="14" width="44" height="36" rx="2" />
        <circle cx="32" cy="32" r="14" />
        <circle cx="32" cy="32" r="6" fill={color} fillOpacity="0.15" />
        <circle cx="32" cy="32" r="1.5" fill={color} />
        <line x1="32" y1="32" x2="42" y2="22" />
        <rect x="44" y="22" width="6" height="20" rx="0.5" />
      </svg>
    ),
    psu: (
      <svg viewBox="0 0 64 64" fill="none" stroke={color} strokeWidth="2" className={className}>
        <rect x="8" y="14" width="48" height="36" rx="2" />
        <circle cx="22" cy="32" r="10" />
        <path d="M22,22 L22,32 L30,32" />
        <line x1="22" y1="32" x2="22" y2="24" />
        <line x1="22" y1="32" x2="14" y2="32" />
        <line x1="22" y1="32" x2="30" y2="32" />
        <line x1="22" y1="32" x2="22" y2="40" />
        <rect x="38" y="22" width="14" height="3" />
        <rect x="38" y="28" width="14" height="3" />
        <rect x="38" y="34" width="14" height="3" />
        <rect x="38" y="40" width="14" height="3" />
      </svg>
    ),
    cooler: (
      <svg viewBox="0 0 64 64" fill="none" stroke={color} strokeWidth="2" className={className}>
        <rect x="22" y="48" width="20" height="6" rx="1" fill={color} fillOpacity="0.15" />
        <rect x="20" y="14" width="24" height="34" rx="1" />
        {Array.from({length: 8}).map((_, i) => (
          <line key={i} x1="20" y1={16 + i * 4} x2="44" y2={16 + i * 4} />
        ))}
        <circle cx="32" cy="10" r="6" />
        <line x1="28" y1="10" x2="36" y2="10" />
        <line x1="32" y1="6" x2="32" y2="14" />
        <line x1="29" y1="7" x2="35" y2="13" />
        <line x1="35" y1="7" x2="29" y2="13" />
      </svg>
    ),
    fan: (
      <svg viewBox="0 0 64 64" fill="none" stroke={color} strokeWidth="2" className={className}>
        <rect x="6" y="6" width="52" height="52" rx="2" />
        <circle cx="32" cy="32" r="22" />
        <circle cx="32" cy="32" r="4" fill={color} fillOpacity="0.3" />
        <path d="M32,12 Q42,18 42,28 Q42,32 32,32 Z" fill={color} fillOpacity="0.1" />
        <path d="M52,32 Q46,42 36,42 Q32,42 32,32 Z" fill={color} fillOpacity="0.1" />
        <path d="M32,52 Q22,46 22,36 Q22,32 32,32 Z" fill={color} fillOpacity="0.1" />
        <path d="M12,32 Q18,22 28,22 Q32,22 32,32 Z" fill={color} fillOpacity="0.1" />
      </svg>
    ),
    soundcard: (
      <svg viewBox="0 0 64 64" fill="none" stroke={color} strokeWidth="2" className={className}>
        <rect x="6" y="22" width="52" height="20" rx="1" />
        <circle cx="14" cy="32" r="3" fill={color} fillOpacity="0.3" />
        <circle cx="24" cy="32" r="3" fill={color} fillOpacity="0.3" />
        <circle cx="34" cy="32" r="3" fill={color} fillOpacity="0.3" />
        <rect x="42" y="28" width="14" height="8" rx="1" />
        <path d="M44,46 Q48,42 52,46" />
        <path d="M42,48 Q48,40 54,48" />
        {Array.from({length: 10}).map((_, i) => (
          <line key={i} x1={8 + i * 5} y1="44" x2={8 + i * 5} y2="46" />
        ))}
      </svg>
    ),
    nic: (
      <svg viewBox="0 0 64 64" fill="none" stroke={color} strokeWidth="2" className={className}>
        <rect x="6" y="22" width="52" height="20" rx="1" />
        <rect x="40" y="26" width="12" height="12" rx="1" />
        <rect x="42" y="28" width="8" height="6" fill={color} fillOpacity="0.3" />
        <circle cx="14" cy="32" r="2" fill={color} />
        <circle cx="22" cy="32" r="2" fill={color} fillOpacity="0.3" />
        <line x1="28" y1="28" x2="36" y2="28" />
        <line x1="28" y1="32" x2="36" y2="32" />
        <line x1="28" y1="36" x2="36" y2="36" />
        {Array.from({length: 10}).map((_, i) => (
          <line key={i} x1={8 + i * 5} y1="44" x2={8 + i * 5} y2="46" />
        ))}
      </svg>
    ),
  }

  return icons[category] || icons.cpu
}

export const slotColors = {
  cpu: '#00d4ff',
  motherboard: '#a855f7',
  memory: '#f472b6',
  gpu: '#f59e0b',
  ssd: '#22c55e',
  hdd: '#6b7280',
  psu: '#ef4444',
  cooler: '#3b82f6',
  fan: '#06b6d4',
  soundcard: '#ec4899',
  nic: '#8b5cf6',
  case: '#94a3b8',
}
