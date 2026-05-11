import { useState, useCallback } from 'react'
import { checkCompatibility } from '../utils/compatibility'

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
  soundcard: null,
  nic: null,
  monitor: null,
}

export function useBuild() {
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

  const compatibilityIssues = checkCompatibility(build)

  const selectedCount = Object.values(build).filter(Boolean).length
  const requiredSelected = ['case', 'cpu', 'motherboard', 'memory', 'psu', 'cooler', 'ssd']
    .filter(cat => build[cat] !== null).length
  const isComplete = requiredSelected === 7

  return {
    build,
    selectPart,
    removePart,
    clearBuild,
    loadBuild,
    compatibilityIssues,
    selectedCount,
    isComplete,
  }
}
