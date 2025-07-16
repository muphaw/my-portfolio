import Logo from "@/assets/logo.svg";
import SpaceButton from "@/animation/SpaceButton";
import {  useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi"; 
import { Button } from "./ui/button";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false); 

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowNavbar(false); // scrolling down
      } else {
        setShowNavbar(true); // scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav 
      className={`bg-transparent px-6 mx-auto lg:px-4 xl:px-10 sticky top-0 z-[9999] transition-transform duration-500 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex items-center justify-between py-4">
        <img src={Logo} className="h-16" alt="Logo" />

        {/* Desktop nav */}
        <ul className="hidden md:flex justify-between items-center gap-8 text-gray-200 text-md orb-font">
          <li><a href="#projects">Projects</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
          <a href="/Mu_Phaw_Phaw_Frontend_Developer.pdf" download="Mu Phaw Phaw - Junior Developer CV.pdf">
            <SpaceButton className="!text-gray-300 active:scale-75">
              Resume
            </SpaceButton>
          </a>
          
        </ul>

        <Button
          className="md:hidden text-white text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </Button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col  px-4 gap-6 py-4 items-center text-white orb-font">
          <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
          <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
          <a href="/Mu_Phaw_Phaw_Frontend_Developer.pdf" download>
            <SpaceButton className="!text-gray-300 w-xs sm:w-md active:scale-75">
              Resume
            </SpaceButton>
          </a>
          
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
