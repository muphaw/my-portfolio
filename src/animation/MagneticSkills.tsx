import React, { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

//  Import your icons
import { ReactComponent as ReactIcon } from "@/assets/react-logo-programming-2-svgrepo-com.svg?react"
import { ReactComponent as ViteIcon } from "@/assets/vite.svg?react"
import { ReactComponent as GithubIcon } from '@/assets/github-142-svgrepo-com.svg?react'
import { ReactComponent as FigmaIcon } from '@/assets/figma.svg?react'
import { ReactComponent as BootstrapIcon } from '@/assets/bootstrap-4-logo-svgrepo-com.svg?react'
import { ReactComponent as HtmlIcon } from '@/assets/html-5-svgrepo-com.svg?react'
import { ReactComponent as FirebaseIcon } from '@/assets/firebase-1-logo-svgrepo-com.svg?react'
import { ReactComponent as JavascriptIcon } from '@/assets/javascript-svgrepo-com.svg?react'
import { ReactComponent as MysqlIcon } from '@/assets/mysql-logo-svgrepo-com.svg?react'
import { ReactComponent as TailwindIcon } from '@/assets/tailwind-svgrepo-com.svg?react'
import { ReactComponent as TypescriptIcon } from '@/assets/typescript-logo-svgrepo-com.svg?react'
import { ReactComponent as GitIcon } from '@/assets/git-icon-svgrepo-com.svg?react'
import clsx from "clsx";

const icons = [
  { Component: ReactIcon, tech: 'React', col: 3, row: 1 },
  { Component: ViteIcon, tech: 'Vite', col: 5, row: 1 },
  { Component: GithubIcon, tech: 'GitHub', col: 7, row: 1 },
  { Component: FigmaIcon, tech: 'Figma', col: 2, row: 2 },
  { Component: HtmlIcon, tech: 'HTML5', col: 4, row: 2 },
  { Component: FirebaseIcon, tech: 'Firebase', col: 6, row: 2 },
  { Component: BootstrapIcon, tech: 'Bootstrap', col: 8, row: 2 },
  { Component: JavascriptIcon, tech: 'JavaScript', col: 1, row: 3 },
  { Component: MysqlIcon, tech: 'MySQL', col: 3, row: 3 },
  { Component: TailwindIcon, tech: 'Tailwind', col: 5, row: 3 },
  { Component: TypescriptIcon, tech: 'TypeScript', col: 7, row: 3 },
  { Component: GitIcon, tech: 'Git', col: 9, row: 3 },
];

type IconProps = {
  Component: React.FC<React.SVGProps<SVGSVGElement>>;
  col: number;
  row: number;
  tech: string;
};

const MagneticBox = ({
  Component,
  cursor,
}: {
  Component: IconProps["Component"];
  cursor: { x: number; y: number };
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const offsetX = useMotionValue(0);
  const offsetY = useMotionValue(0);

  const springX = useSpring(offsetX, { stiffness: 200, damping: 25 });
  const springY = useSpring(offsetY, { stiffness: 200, damping: 25 });

  useEffect(() => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = cursor.x - centerX;
    const deltaY = cursor.y - centerY;
    const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);

    const strength = Math.min(40000 / distance, 20); // Cap force
    offsetX.set((deltaX / distance) * strength || 0);
    offsetY.set((deltaY / distance) * strength || 0);
  }, [cursor.x, cursor.y]);

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      className="w-10 h-10 md:w-14 md:h-14 shadow-lg  rounded-lg p-2 flex items-center justify-center "
    >
      <Component className="w-8 h-8" />
    </motion.div>
  );
};

const MagneticSkills = () => {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursor({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="flex justify-center items-start h-[300px]  backdrop-blur">
      <div className="grid grid-cols-9 grid-rows-3 gap-4 w-[900px] ">
        {icons.map((icon, i) => (
          <div
            key={i}
            className={clsx(
              {
                'col-start-1': icon.col === 1,
                'col-start-2': icon.col === 2,
                'col-start-3': icon.col === 3,
                'col-start-4': icon.col === 4,
                'col-start-5': icon.col === 5,
                'col-start-6': icon.col === 6,
                'col-start-7': icon.col === 7,
                'col-start-8': icon.col === 8,
                'col-start-9': icon.col === 9,
              },
              {
                'row-start-1': icon.row === 1,
                'row-start-2': icon.row === 2,
                'row-start-3': icon.row === 3,
              }
            )}
          >
            <MagneticBox Component={icon.Component} cursor={cursor} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MagneticSkills;
