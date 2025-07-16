import AnimatedLetter from '@/animation/AnimatedLetter'
import emailIcon from '@/assets/email-sign-svgrepo-com.svg'
import githubIcon from '@/assets/github-142-svgrepo-com.svg'
import linkedinIcon from '@/assets/linkedin-svgrepo-com.svg'
import PhotoCard from '@/animation/PhotoCard'
import ParticleBackground from '@/animation/Particles'

const Hero = () => {

  const myEmail = "muphaw755@gmail.com";
  
  return (
    <div id='home' className="min-h-screen flex items-center justify-center px-4 py-10 ">
      
      <div className="flex flex-col md:flex-row items-center  w-full max-w-7xl gap-6 md:gap-10 mb-24 ">
        <div className="ml-6">
          <PhotoCard/>
          
        </div>
        <div className="mr-1  overflow-hidden ">
          <h1 className='text-2xl silver-text orb-font text-center sm:text-start'>I'm </h1>
          
          <h1 className='text-4xl sm:text-5xl md:text-6xl text-center sm:text-left silver-text orb-font silver-glow font-bold pt-4'>Mu Phaw Phaw </h1>
          <AnimatedLetter />
          <div className="flex  items-center justify-center sm:justify-start mt-5 sm:mt-8 gap-8 ">
              <a href={`mailto:${myEmail}`}>
                <div className="w-8 h-8 bg-gray-400 hover:bg-gray-200  flex items-center justify-center rounded-full" >
                  <img src={emailIcon}  className="w-6 h-6 " alt="" />
              </div>
              </a>
              
              <a href="https://github.com/muphaw" target="_blank" rel="noopener noreferrer">
                  <div className="w-8 h-8 bg-gray-400 hover:bg-gray-200 flex items-center justify-center rounded-full">
                <img src={githubIcon} className="w-6 h-6" alt="" />
              </div>
              </a>
              <a href="https://www.linkedin.com/in/mu-phaw-6a037b259/" target="_blank" rel="noopener noreferrer">
              <div className="w-8 h-8 bg-gray-400 hover:bg-gray-200  flex items-center justify-center rounded-full">
                <img src={linkedinIcon} className="w-6 h-6" alt="" />
              </div>
              </a>
              
          </div>
        </div>
        <ParticleBackground/>
      </div>
    </div>
  )
}

export default Hero
