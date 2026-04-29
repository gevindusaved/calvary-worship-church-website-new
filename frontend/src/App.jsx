import { useEffect, useState } from 'react'
import MainLayout from './components/layout/MainLayout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServantsPage from './pages/ServantsPage'
import EventsPage from './pages/EventsPage'
import VideosPage from './pages/VideosPage'

const routes = {
  '/': HomePage,
  '/about': AboutPage,
  '/servants': ServantsPage,
  '/events': EventsPage,
  '/videos': VideosPage,
}

export default function App() {
  const [path, setPath] = useState(window.location.pathname)

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname)
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  const navigate = (to) => {
    if (to === path) return
    window.history.pushState({}, '', to)
    setPath(to)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const Page = routes[path] ?? HomePage
  return <MainLayout path={path} navigate={navigate}><Page navigate={navigate} /></MainLayout>
}
