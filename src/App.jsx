import { Routes, Route } from 'react-router-dom'
import { BuildProvider } from './context/BuildContext'
import { ThemeProvider } from './context/ThemeContext'
import Layout from './components/Layout'
import BuilderPage from './pages/BuilderPage'
import RankingsPage from './pages/RankingsPage'
import PeripheralsPage from './pages/PeripheralsPage'
import SavedBuildsPage from './pages/SavedBuildsPage'

function App() {
  return (
    <ThemeProvider>
      <BuildProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<BuilderPage />} />
            <Route path="/rankings" element={<RankingsPage />} />
            <Route path="/peripherals" element={<PeripheralsPage />} />
            <Route path="/saved" element={<SavedBuildsPage />} />
          </Routes>
        </Layout>
      </BuildProvider>
    </ThemeProvider>
  )
}

export default App
