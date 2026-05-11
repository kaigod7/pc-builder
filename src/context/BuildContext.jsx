import { createContext, useContext, useState, useCallback } from 'react'
import { checkCompatibility } from '../utils/compatibility'

const BuildContext = createContext(null)

const initialBuild = {
  case: null,
  cpu: null,
  motherboard: null,
  memory: null,
  gpu: null,
  ssd: null,
  hdd: null,
  psu: null,
  cooler: null,
  fan: null,
  soundcard: null,
  nic: null,
}

// Base required parts (always required)
const baseRequired = ['case', 'cpu', 'motherboard', 'memory', 'psu', 'cooler', 'ssd']

export function BuildProvider({ children }) {
  const [build, setBuild] = useState(initialBuild)

  const selectPart = useCallback((category, part) => {
    setBuild(prev => ({
      ...prev,
      [category]: part
    }))
  }, [])

  const removePart = useCallback((category) => {
    setBuild(prev => ({
      ...prev,
      [category]: null
    }))
  }, [])

  const clearBuild = useCallback(() => {
    setBuild(initialBuild)
  }, [])

  const loadBuild = useCallback((savedBuild) => {
    setBuild(savedBuild)
  }, [])

  // GPU is required if CPU has no integrated graphics
  const gpuRequired = build.cpu && build.cpu.igpu === null
  const requiredCategories = gpuRequired ? [...baseRequired, 'gpu'] : baseRequired

  const isPartRequired = useCallback((category) => {
    return requiredCategories.includes(category)
  }, [requiredCategories])

  const compatibilityIssues = checkCompatibility(build)

  const selectedCount = Object.values(build).filter(Boolean).length
  const requiredSelected = requiredCategories.filter(cat => build[cat] !== null).length
  const isComplete = requiredSelected === requiredCategories.length

  return (
    <BuildContext.Provider value={{
      build,
      selectPart,
      removePart,
      clearBuild,
      loadBuild,
      compatibilityIssues,
      selectedCount,
      isComplete,
      isPartRequired,
      requiredCategories,
      gpuRequired,
    }}>
      {children}
    </BuildContext.Provider>
  )
}

export function useBuildContext() {
  const context = useContext(BuildContext)
  if (!context) {
    throw new Error('useBuildContext must be used within a BuildProvider')
  }
  return context
}
