import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { useTheme } from '../context/ThemeContext'

const navItems = [
  { path: '/', label: '装机搭配', icon: '◈' },
  { path: '/rankings', label: '硬件排行', icon: '▲' },
  { path: '/peripherals', label: '外设排行', icon: '◉' },
  { path: '/saved', label: '我的方案', icon: '✦' },
]

function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const options = [
    { value: 'light', label: '☀', title: '亮色' },
    { value: 'dark', label: '☾', title: '暗色' },
    { value: 'system', label: '◑', title: '跟随系统' },
  ]

  return (
    <div className="flex items-center bg-bg-primary border border-border rounded-lg overflow-hidden">
      {options.map((opt) => (
        <button
          key={opt.value}
          onClick={() => setTheme(opt.value)}
          title={opt.title}
          className={`px-2.5 py-1.5 text-sm transition-all ${
            theme === opt.value
              ? 'bg-accent text-bg-primary'
              : 'text-text-muted hover:text-text-primary'
          }`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  )
}

export default function Layout({ children }) {
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-bg-primary/80 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 text-accent font-bold text-lg tracking-wide">
              <span className="text-xl">◈</span>
              <span>PC Builder</span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden sm:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    location.pathname === item.path
                      ? 'bg-accent-dim text-accent'
                      : 'text-text-secondary hover:text-text-primary hover:bg-bg-hover'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Theme toggle + Mobile menu button */}
            <div className="flex items-center gap-2">
              <div className="hidden sm:block">
                <ThemeToggle />
              </div>
              <button
                className="sm:hidden p-2 text-text-secondary hover:text-text-primary"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Nav */}
          {mobileMenuOpen && (
            <div className="sm:hidden pb-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    location.pathname === item.path
                      ? 'bg-accent-dim text-accent'
                      : 'text-text-secondary hover:text-text-primary hover:bg-bg-hover'
                  }`}
                >
                  <span className="mr-2">{item.icon}</span>
                  {item.label}
                </Link>
              ))}
              <div className="px-4 pt-2">
                <ThemeToggle />
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-4 text-center text-xs text-text-muted">
        PC Builder - 装机配置助手 · 数据仅供参考
      </footer>
    </div>
  )
}
