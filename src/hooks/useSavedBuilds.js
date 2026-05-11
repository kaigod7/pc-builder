import { useState, useCallback, useEffect } from 'react'

const STORAGE_KEY = 'pc-builder-saved-builds'

function loadFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) {
      return JSON.parse(raw)
    }
  } catch (e) {
    console.error('Failed to load saved builds:', e)
  }
  return []
}

function saveToStorage(builds) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(builds))
  } catch (e) {
    console.error('Failed to save builds:', e)
  }
}

export function useSavedBuilds() {
  const [builds, setBuilds] = useState(loadFromStorage)

  useEffect(() => {
    saveToStorage(builds)
  }, [builds])

  const saveBuild = useCallback((build, name) => {
    const newBuild = {
      id: Date.now().toString(36) + Math.random().toString(36).substr(2, 5),
      name: name || `方案 ${builds.length + 1}`,
      createdAt: new Date().toISOString(),
      build,
    }
    setBuilds(prev => [newBuild, ...prev])
    return newBuild.id
  }, [builds.length])

  const deleteBuild = useCallback((id) => {
    setBuilds(prev => prev.filter(b => b.id !== id))
  }, [])

  const renameBuild = useCallback((id, newName) => {
    setBuilds(prev => prev.map(b =>
      b.id === id ? { ...b, name: newName } : b
    ))
  }, [])

  return {
    builds,
    saveBuild,
    deleteBuild,
    renameBuild,
  }
}
