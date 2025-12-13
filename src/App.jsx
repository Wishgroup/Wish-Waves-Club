import React, { useState, useEffect } from 'react'
import Preloader from './components/Preloader'
import Topbar from './components/Topbar'
import MobileMenu from './components/MobileMenu'
import Hero from './components/Hero'
import About from './components/About'
import MembershipForm from './components/MembershipForm'
import Footer from './components/Footer'
import ProgressBar from './components/ProgressBar'
import { useTheme } from './hooks/useTheme'
import { useScroll } from './hooks/useScroll'
import { useSvgConverter } from './hooks/useSvgConverter'

function App() {
  const [isDark, setIsDark] = useState(false)
  const [showPreloader, setShowPreloader] = useState(true)

  useTheme(isDark)
  useScroll()
  useSvgConverter()

  useEffect(() => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)
    if (!isMobile) {
      setTimeout(() => {
        setShowPreloader(false)
        // Ensure page is at top when preloader finishes
        window.scrollTo({ top: 0, behavior: 'instant' })
      }, 1500)
    } else {
      setShowPreloader(false)
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }, [])

  return (
    <div className="grax_tm_all_wrap simple-portfolio" data-color="wish">
      {showPreloader && <Preloader />}
      <Topbar />
      <MobileMenu />
      <Hero showPreloader={showPreloader} />
      <About />
      <MembershipForm />
      <Footer />
      <ProgressBar />
    </div>
  )
}

export default App

