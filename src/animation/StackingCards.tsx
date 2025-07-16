import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import SpaceButton from "@/animation/SpaceButton";
import { ReactLenis } from "lenis/react";
import { useBreakpoint } from "@/hooks/userBreakPoint";

const projects = [
  {
    title: "Lap Hub",
    description: [
      "Secure school portal for LAP students only",
      "Students can log in and perform full CRUD operations",
      "Designed in Figma with a focus on UI/UX",
      "Built using Vue, Tailwind CSS, custom form validation, and TypeScript",
      "Fully responsive and deployed seamlessly with Vercel",
    ],
    link: "/videos/LapHub.mp4",
    liveDemo: "https://lap-hub-lyart.vercel.app/",
    githubLink: "https://github.com/muphaw/Lap-Hub",
  },
  {
    title: "Lap Hub",
    description: [
      "Secure school portal for LAP students only",
      "Students can log in and perform full CRUD operations",
      "Designed in Figma with a focus on UI/UX",
      "Built using Vue, Tailwind CSS, custom form validation, and TypeScript",
      "Fully responsive and deployed seamlessly with Vercel",
    ],
    link: "/videos/LapHub.mp4",
    liveDemo: "https://lap-hub-lyart.vercel.app/",
    githubLink: "https://github.com/muphaw/Lap-Hub",
  },
  {
    title: "Lap Hub",
    description: [
      "Secure school portal for LAP students only",
      "Students can log in and perform full CRUD operations",
      "Designed in Figma with a focus on UI/UX",
      "Built using Vue, Tailwind CSS, custom form validation, and TypeScript",
      "Fully responsive and deployed seamlessly with Vercel",

    ],
    link: "/videos/LapHub.mp4",
    liveDemo: "https://lap-hub-lyart.vercel.app/",
    githubLink: "https://github.com/muphaw/Lap-Hub",
  },
];

interface CardProps {
  i: number;
  title: string;
  description: string | string[];
  videoSrc: string;
  liveDemo: string;
  githubLink: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

const Card: React.FC<CardProps> = ({
  i,
  title,
  description,
  videoSrc,
  liveDemo,
  githubLink,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef<HTMLDivElement | null>(null);
  const scale = useTransform(progress, range, [1, targetScale]);

    const breakpoint = useBreakpoint();

  const topOffset = breakpoint === "lg"
  ? `calc(-1vh + ${i * 30}px)`
  : breakpoint === "md"
  ? `calc(-12vh + ${i * 30}px)`
  : `calc(5vh + ${i * 22}px)`;

  return (
    <div
      id="projects"
      ref={container}
      className="h-screen sticky top-0 flex items-center justify-center mb-20 space-font"
    >
      <motion.div
        style={{
          scale,
          top: topOffset,
        }}
        className="relative w-full  max-w-7xl   mx-auto group"
      >
        {/* Glow background */}
        <div className="absolute inset-0 opacity-30 group-hover:opacity-100 blur-lg transition-all duration-500 z-10 bg-gradient-to-r from-gray-300 to-purple-400" />

        <div className="relative w-full h-full  z-20 grid grid-cols-1 md:grid-cols-5 gap-3 bg-black px-4 py-4 sm:py-6 rounded-md shadow-md text-white overflow-hidden ">
          {/* Text + Buttons */}
          <div className="order-2  md:order-1 flex items-center justify-between flex-col md:col-span-2 space-y-3 sm:space-y-5 px-4">
            <div className="">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3">
                {title}
              </h2>
              {Array.isArray(description) ? (
                <ul className="list-disc list-inside text-sm sm:text-md md:text-base space-y-1">
                  {description.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm sm:text-md md:text-base">
                  {description}
                </p>
              )}
            </div>

            <div className=" flex items-center justify-between w-full  gap-4">
              <div className="">
                {liveDemo ? (
                <a href={liveDemo} target="_blank" rel="noopener noreferrer" className="w-full">
                  <SpaceButton className=" !text-gray-300 hover:scale-110 active:scale-75 text-sm sm:text-md md:text-base px-5 sm:px-4">
                    Live Demo
                  </SpaceButton>
                </a>
              ) : (
                <SpaceButton className=" !text-gray-300 hover:scale-110 opacity-50 cursor-not-allowed text-sm sm:text-md md:text-base px-">
                  Coming Soon
                </SpaceButton>
              )}
              </div>
              <div className="">
                {githubLink ? (
                <a href={githubLink} target="_blank" rel="noopener noreferrer" className="w-full">
                  <SpaceButton className=" !text-gray-300 hover:scale-110 active:scale-75 text-sm sm:text-md md:text-base px-7 sm:px-6">
                    GitHub
                  </SpaceButton>
                </a>
              ) : (
                <SpaceButton className=" !text-gray-300 hover:scale-110 opacity-50 cursor-not-allowed text-sm sm:text-md md:text-base px-">
                  Private
                </SpaceButton>
              )}
              </div>

              
            </div>
          </div>

          {/* Video */}
          <div className=" order-1  md:order-2 md:col-span-3 flex items-center justify-center">
            <div className="w-[400px] md:w-[700px] mx-auto">
              <video
                src={videoSrc}
                className="w-full h-auto aspect-video object-cover rounded-md border border-gray-700"
                muted
                loop
                autoPlay
                playsInline
              />
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
};

const StackingCards: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Move title out after 85% scroll
  const titleY = useTransform(scrollYProgress, [0, 0.999, 1], ["0%", "0%", "-150%"]);

  return (
    <ReactLenis root>
      <main className="relative">
        <section
          ref={containerRef}
          className="relative h-[370vh] flex flex-col justify-start"
        >
          {/* Sticky Title */}
          <motion.div style={{ y: titleY }} className="sticky top-0 z-30 pt-18">
            <div className="flex items-center w-full mx-auto  px-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl orb-font font-bold silver-text silver-glow mr-4 whitespace-nowrap">
                Projects
              </h1>
            </div>
          </motion.div>

          {/* Cards */}
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;
            return (
              <Card
                key={i}
                i={i}
                title={project.title}
                description={project.description}
                videoSrc={project.link}
                liveDemo={project.liveDemo}
                githubLink={project.githubLink}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </section>
      </main>
    </ReactLenis>
  );
};

export default StackingCards;
