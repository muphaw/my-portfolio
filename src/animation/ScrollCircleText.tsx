import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import MagneticSkills from "./MagneticSkills";
import { useVisibility } from "@/context/VisibilityContext";

const lines = [
  "I’m a self-taught Frontend Developer currently in my third year",
  "pursuing a Bachelor’s degree in Computer Studies at MIT.",
  "I’ve been actively building my skills in React, Tailwind CSS,",
  "Framer Motion, and TypeScript through personal projects, internships,",
  "and open-source contributions. I enjoy turning design ideas",
  "into clean, responsive, and accessible user interfaces...",
];

const ScrollCircleText = () => {
   const ref = useRef<HTMLDivElement>(null);
  const { setIsWhiteDiv } = useVisibility();


useEffect(() => {
  const observer = new IntersectionObserver(
    (entries: IntersectionObserverEntry[]) => {
      const entry = entries[0];
      console.log('Observer fired:', entry.isIntersecting);
      setIsWhiteDiv(entry.isIntersecting);
    },
    { threshold: 0.001 } // my div is h 800vh ,so it is so tall for threhold to make 0.1
  );

  if (ref.current) {
    observer.observe(ref.current);
  }

  return () => {
    if (ref.current) {
      observer.unobserve(ref.current);
    }
  };
}, [setIsWhiteDiv]);


  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end end"], // when top of ref hits bottom of screen to when bottom hits top
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.05, 0.9, 1],
    [0, 1, 1, 0]
  );

  return (
    <section
      ref={ref}
      className="min-h-screen relative scroll-smooth w-full  bg-white mb-30 rounded-[100px]"
    >
      <motion.div
        style={{ opacity }}
        className="relative font-bold text-gray-800 w-full  mx-auto z-20 p-4 "
      >
        <div className="h-[800vh] relative ">
          <div className="sticky top-1/2 -translate-y-1/2 flex justify-center items-center h-screen">
            <div className="max-w-5xl space-y-6 px-6 ">
              {lines.map((line, lineIndex) => {
                const words = line.split(" ");

                return (
                  <motion.p
                    key={lineIndex}
                    className="text-xl sm:text-2xl  font-medium text-gray-800 silver-glow space-font flex flex-wrap  gap-x-2"
                  >
                    {words.map((word, wordIndex) => {
                      // create per-word animation range
                      const baseStart =
                        0.1 + lineIndex * 0.09 + wordIndex * 0.01;
                      const baseEnd = baseStart + 0.1;

                      const opacity = useTransform(
                        scrollYProgress,
                        [baseStart, baseEnd],
                        [0, 1]
                      );
                      const blurValue = useTransform(
                        scrollYProgress,
                        [baseStart, baseEnd],
                        [8, 0]
                      );
                      const blur = useTransform(
                        blurValue,
                        (v) => `blur(${v}px)`
                      );

                      return (
                        <motion.span
                          id="about"
                          key={wordIndex}
                          style={{ opacity, filter: blur }}
                          className="inline-block"
                        >
                          {word}&nbsp;
                        </motion.span>
                      );
                    })}
                  </motion.p>
                );
              })}
            </div>
          </div>
        </div>

        <div className="h-[250vh] relative">
          <div className="sticky top-1/2 -translate-y-1/3  justify-center items-center h-screen">
            <div className="">
              <MagneticSkills />
            </div>
            <div className=" ">
              <div className=" text-gray-600 silver-glow px-12 ">
                <h1 className="font-extrabold text-2xl orb-font sm:text-3xl md:text-4xl mb-8">
                  Experience
                </h1>

                <div className="space-font flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0 py-8 flex-grow border-b border-gray-700">
                  <div className="text-left">
                    <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">
                      Intern
                    </h1>
                  </div>

                  <div className=" space-font text-left md:text-right">
                    <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">
                      Frontiir (Myanmar Net)
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-500">
                      Feb – Apr 2023
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ScrollCircleText;
