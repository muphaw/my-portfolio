import Earth from "@/animation/Earth";
import SpaceButton from "../animation/SpaceButton";
import { FaSatelliteDish, FaSpaceShuttle } from "react-icons/fa";
import githubIcon from '@/assets/github-142-svgrepo-com.svg';
import twitterIcon from '@/assets/twitter-svgrepo-com (1).svg';
import linkedinIcon from '@/assets/linkedin-svgrepo-com.svg';

const Contact = () => {

  const myEmail = "muphaw755@gmail.com";


  return (
    <div
      id="contact"
      className="flex   flex-col items-center justify-center py-16 md:px-8 overflow-x-hidden"
    >
      {/* Top section: text + Earth */}
      <div className="flex flex-col lg:flex-row items-center md:items-start justify-between  w-full max-w-6xl ">
        {/* Text */}
        <div className="text-center lg:text-left ">
          <div className="flex flex-col sm:flex-row md:items-center items-center sm:items-center justify-center lg:justify-start">
            <img
              src="/me.jpg"
              className="w-25 h-25 rounded-full object-cover mb-4 sm:mb-0 sm:mr-4 "
              alt="Profile"
            />
            <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl orb-font font-medium silver-text silver-glow">
              Let's work
            </div>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl orb-font font-medium silver-text silver-glow">
            together
          </h1>
        </div>

        {/* Earth Animation */}
        <div className="flex items-end justify-end  mt-10 sm:mt-8 md:mt-0">
          <Earth />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col md:flex-row items-center justify-center lg:justify-start w-full max-w-6xl gap-7 mt-12 md:mt-8 mx-8">
        <SpaceButton
        onClick={() =>
            (window.location.href = `mailto:${myEmail}`)
          }
         className="py-6 px-8  w-xs sm:w-md md:w-auto active:scale-95">
          <div className="flex items-center space-font text-base md:text-lg font-bold gap-4 text-gray-300">
            <FaSpaceShuttle className="-rotate-45 original-center scale-[1.3]" />
            <span>muphaw755@gmail.com</span>
          </div>
        </SpaceButton>

        <SpaceButton
        onClick={() => window.location.href = 'tel:+95 9452115011'}
         className="py-6 px-8 w-xs md:w-auto sm:w-md active:scale-95">
          <div className="flex items-center space-font text-base md:text-lg font-bold gap-4 text-gray-300">
            <FaSatelliteDish className="pb-0.5 original-center scale-[1.3]" />
            <span>+95 9452115011</span>
          </div>
        </SpaceButton>
      </div>

      {/* Footer */}
      <div className="flex flex-col md:flex-row items-center w-full max-w-6xl mt-16 md:mt-40 gap-4">
        <h1 className="text-sm silver-text silver-glow whitespace-nowrap">
          2025 © MuPhaw
        </h1>
        <div className="flex-grow h-px bg-gray-500 silver-glow w-full md:w-auto"></div>
        <div className="flex gap-4 mt-4 md:mt-0">
          <img
            src={githubIcon}
            className="w-8 h-8 rounded-sm bg-gray-300 hover:bg-gray-50 hover:scale-110 active:scale-95 transition-all duration-400"
            alt="GitHub"
          />
          <img
            src={twitterIcon}
            className="w-8 h-8 rounded-sm bg-gray-300 hover:bg-gray-50 hover:scale-110 active:scale-95 transition-all duration-400"
            alt="Twitter"
          />
          <img
            src={linkedinIcon}
            className="w-8 h-8 rounded-sm bg-gray-300 hover:bg-gray-50 hover:scale-110 active:scale-95 transition-all duration-400"
            alt="LinkedIn"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
