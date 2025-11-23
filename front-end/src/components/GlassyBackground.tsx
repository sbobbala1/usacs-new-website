import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

export function GlassyBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [orbs, setOrbs] = useState<{ id: number; x: number; y: number; size: number; color: string }[]>([]);

  useEffect(() => {
    // Create interactive orbs with varied colors
    const colors = [
      'rgba(220, 38, 38, 0.5)',     // red
      'rgba(244, 63, 94, 0.5)',     // rose
      'rgba(190, 18, 60, 0.5)',     // pink
      'rgba(124, 58, 237, 0.4)',    // violet
      'rgba(236, 72, 153, 0.4)',    // fuchsia
      'rgba(239, 68, 68, 0.5)',     // red-500
      'rgba(59, 130, 246, 0.3)',    // blue
      'rgba(168, 85, 247, 0.4)',    // purple
    ];

    const newOrbs = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 400 + 200,
      color: colors[i % colors.length],
    }));
    setOrbs(newOrbs);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Animated background orbs with varied colors */}
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className="absolute rounded-full blur-3xl opacity-30"
          style={{
            width: orb.size,
            height: orb.size,
            left: `${orb.x}%`,
            top: `${orb.y}%`,
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15 + orb.id * 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Interactive mouse follower with gradient */}
      <motion.div
        className="absolute w-96 h-96 rounded-full blur-3xl opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(220, 38, 38, 0.6) 0%, rgba(168, 85, 247, 0.4) 50%, transparent 70%)',
        }}
        animate={{
          x: `${mousePosition.x}%`,
          y: `${mousePosition.y}%`,
        }}
        transition={{
          type: 'spring',
          damping: 30,
          stiffness: 100,
        }}
        style={{
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Geometric shapes floating */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute w-32 h-32 border-2 border-red-500/20 rounded-full"
          style={{ top: '10%', left: '80%' }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        <motion.div
          className="absolute w-24 h-24 border-2 border-purple-500/20"
          style={{ top: '60%', left: '15%', borderRadius: '20%' }}
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        <motion.div
          className="absolute w-20 h-20 border-2 border-rose-500/20 rounded-lg"
          style={{ top: '80%', left: '70%' }}
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>
    </div>
  );
}