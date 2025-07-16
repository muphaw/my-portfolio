import { useEffect } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

const FloatingScrollText = () => {
  const text = 'FLOATING TEXT HERE';
  const floatOffsets = [-30, -50, -10, -40, -20, -35, -15, -25, -45, -30, -10, -20, -15, -5, -35, -30, -25, -15];

  // track the scroll
  const scrollY = useMotionValue(0);

  useEffect(() => {
    const handleScroll = () => {
      scrollY.set(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollY]);

  return (
    <div className="my-32">
      <h2 className="text-4xl text-white md:text-6xl font-bold flex flex-wrap gap-1 justify-center">
        {[...text].map((char, index) => {
          const offset = floatOffsets[index % floatOffsets.length];

          // Create a scroll-based y transform for each letter
          const yRaw = useTransform(scrollY, [0, 300], [0, offset]);
          const y = useSpring(yRaw, { stiffness: 100, damping: 20 });

          return (
            <motion.span key={index} style={{ y }} className="inline-block">
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          );
        })}
      </h2>
    </div>
  );
};

export default FloatingScrollText;
