import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import HomePage from '@/pages/HomePage'
import SplashCursor from './animation/CustomCursor'
import Loading from './animation/Loading'
import { VisibilityProvider } from './context/VisibilityContext'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false) // start exit animation after 5s
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-gray-800  z-50"
            initial={{ y: 0, opacity: 1 }}
            animate={{ y: 0,  opacity: 1}}
            exit={{ y: '-100%', opacity: 1, transition: { duration: 1.2 } }}
          >
            <Loading />
          </motion.div>
        )}
      </AnimatePresence>

      {!isLoading && (
        <VisibilityProvider>
          <HomePage />
          <SplashCursor />
        </VisibilityProvider>
      )}
    </>
  )
}

export default App
