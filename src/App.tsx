import HomePage from '@/pages/HomePage'
import SplashCursor from './animation/CustomCursor'
import { useEffect, useState } from 'react'
import Loading from './animation/Loading'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 5000) // wait 5 seconds

    return () => clearTimeout(timer)
  }, [])
  return (
    <>
    {
      isLoading ? <div className='text-center text-3xl bg-gray-800 min-h-screen'><Loading/></div>
      : (
        <>
          <HomePage/>
          <SplashCursor/>
        </>
      )
    }
    </>
  )
}

export default App
