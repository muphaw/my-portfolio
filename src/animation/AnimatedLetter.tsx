import { useEffect } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

// Float offsets for scroll floating effect
const floatOffsets = [
  -30, -50, -10, -40, -20, -35, -15, -25, -45,
  -30, -10, -20, -15, -5, -35, -30, -25, -15,
];

// Animation variants for staggered fade-in on mount
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function AnimatedFloatingLetters() {
  const scrollY = useMotionValue(0);

  useEffect(() => {
    const handleScroll = () => scrollY.set(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);

  return (
    <motion.h1
      className="
        text-3xl sm:text-4xl md:text-5xl  
        font-bold flex flex-wrap justify-center sm:justify-start
        tracking-wide leading-tight silver-text silver-glow orb-font pt-6
      "
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {/* FRONTEND letters */}
      {"FRONTEND".split("").map((char, index) => {
        const offset = floatOffsets[index % floatOffsets.length];
        const yRaw = useTransform(scrollY, [0, 300], [0, offset]);
        const y = useSpring(yRaw, { stiffness: 100, damping: 20 });

        return (
          <motion.span
            key={`frontend-${index}`}
            variants={letter}
            style={{ y }}
            className={char === " " ? "w-2 inline-block" : "inline-block"}
          >
            {char}
          </motion.span>
        );
      })}

      {/* DASH */}
      <motion.span
        variants={letter}
        className="inline-block mx-2"
      >
        —
      </motion.span>

      {/* DEVELOPER word: letter by letter, but wrapped as a block */}
      <motion.span className="inline-block break-words ml-2">
        {"DEVELOPER".split("").map((char, index) => {
          const offset = floatOffsets[index % floatOffsets.length];
          const yRaw = useTransform(scrollY, [0, 300], [0, offset]);
          const y = useSpring(yRaw, { stiffness: 100, damping: 20 });

          return (
            <motion.span
              key={`developer-${index}`}
              variants={letter}
              style={{ y }}
              className={char === " " ? "w-2 inline-block" : "inline-block"}
            >
              {char}
            </motion.span>
          );
        })}
      </motion.span>
    </motion.h1>
  );
}
