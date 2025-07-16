import Loading from '@/animation/Loading'
import ParticleSystem from '@/animation/Particles'
import Navbar from '@/components/Navbar'
import { lazy, Suspense } from 'react'

const Hero = lazy(() => import('@/components/Hero'))
const About = lazy(() => import('@/components/About'))
const Project =lazy(()=> import('@/components/Projects'))
const Contact = lazy(()=> import('@/components/Contact'))
const HomePage = () => {
  return (
  <div className="relative min-h-screen w-full bg-black">
  <div className="relative z-20 w-full">
    <Navbar />
    <Suspense fallback={<div className='absolute inset-0 flex items-center justify-center'><Loading/></div>}>
        <main className="scroll-smooth">
          <Hero />
          <Project />
          <About />
          <Contact />
        </main>
    </Suspense>
  </div>
  </div>
  )
}

export default HomePage

