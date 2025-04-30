import { useEffect, useRef } from 'react';
import { generateStars } from '@/lib/utils';

interface CosmicParticle {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
}

export default function CosmicBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas size to match window
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Create stars
    const particles: CosmicParticle[] = [];
    const particleCount = Math.min(Math.floor(window.innerWidth * window.innerHeight / 10000), 150);
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speed: Math.random() * 0.2 + 0.1,
        opacity: Math.random() * 0.8 + 0.2
      });
    }
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw each particle
      particles.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = 'rgba(255, 255, 255, 0.5)';
        ctx.fill();
        
        // Move particle slightly
        particle.y += particle.speed;
        
        // Reset particle when it goes off-screen
        if (particle.y > canvas.height) {
          particle.y = 0;
          particle.x = Math.random() * canvas.width;
        }
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 cosmos-bg overflow-hidden"
      aria-hidden="true"
    />
  );
}
