import { useRef, useState, type MouseEvent, type ReactNode } from 'react';
import { Button } from '../components/ui/button';

interface SpaceButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

const SpaceButton = ({ children, className = '', onClick }: SpaceButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [trail, setTrail] = useState<Array<{ x: number; y: number }>>([]);

  const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      setTrail(prev => [...prev.slice(-10), { x, y }]);
    }
  };

  const handleMouseLeave = () => setTrail([]);

  return (
    <Button
      ref={buttonRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden conn  rounded-2xl  !text-gray-300  hover:shadow-lg hover:brightness-130 hover:scale-100  cursor-pointer transition-all duration-400 ${className}`}
    >
      {/* Dark overlay */}
      <div
        className="absolute inset-0 bg-black pointer-events-none"
        style={{ opacity: 0.6, zIndex: 0 }}
      />

      {/* Button content */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
          {children}
        </div>

      {/* Cursor trail */}
      {trail.slice(3).map((point, index) => {
        const prevPoint = trail[index];
        const dx = point.x - prevPoint.x;
        const dy = point.y - prevPoint.y;
        const length = Math.sqrt(dx * dx + dy * dy);
        const angle = Math.atan2(dy, dx) * (180 / Math.PI);

        return (
          <div
            key={index}
            className="absolute pointer-events-none"
            style={{
              left: `${prevPoint.x}px`,
              top: `${prevPoint.y}px`,
              width: `${length}px`,
              height: `2px`,
              backgroundColor: '#C0C0C0',
              transform: `rotate(${angle}deg)`,
              transformOrigin: '0 0',
              zIndex: 5,
              opacity: 1 - index / trail.length,
              boxShadow: `0 0 4px #FFFFF9, 0 0 8px #3a3e51`,
              filter: 'drop-shadow(0 0 4px #E0E0E0)',
            }}
          />
        );
      })}
    </Button>
  );
};

export default SpaceButton;
