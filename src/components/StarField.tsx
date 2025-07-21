import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  z: number;
  size: number;
  speed: number;
}

const StarField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createStars = () => {
      const stars: Star[] = [];
      const numStars = Math.min(200, Math.floor((window.innerWidth * window.innerHeight) / 8000));
      
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: Math.random() * 1000,
          size: Math.random() * 2 + 0.5,
          speed: Math.random() * 0.5 + 0.1,
        });
      }
      
      starsRef.current = stars;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Get CSS variables for theming
      const isDark = document.documentElement.classList.contains('dark');
      const starColor = isDark ? 'rgba(255, 255, 255, 0.8)' : 'rgba(100, 100, 120, 0.6)';
      const glowColor = isDark ? 'rgba(255, 255, 255, 0.3)' : 'rgba(100, 100, 120, 0.2)';

      starsRef.current.forEach((star) => {
        // Move stars
        star.y += star.speed;
        star.z -= star.speed * 2;

        // Reset star if it goes off screen
        if (star.y > canvas.height || star.z <= 0) {
          star.y = -10;
          star.x = Math.random() * canvas.width;
          star.z = 1000;
        }

        // Calculate 3D projection
        const scale = 1000 / (1000 + star.z);
        const x = star.x * scale;
        const y = star.y * scale;
        const size = star.size * scale;

        // Draw star with glow effect
        ctx.shadowBlur = size * 2;
        ctx.shadowColor = glowColor;
        ctx.fillStyle = starColor;
        ctx.beginPath();
        ctx.arc(x, y, Math.max(size, 0.5), 0, Math.PI * 2);
        ctx.fill();

        // Add subtle twinkle effect
        if (Math.random() > 0.99) {
          ctx.shadowBlur = size * 4;
          ctx.fillStyle = isDark ? 'rgba(255, 255, 255, 1)' : 'rgba(100, 100, 120, 0.8)';
          ctx.beginPath();
          ctx.arc(x, y, size * 1.5, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      ctx.shadowBlur = 0;
      animationRef.current = requestAnimationFrame(animate);
    };

    // Initialize
    resizeCanvas();
    createStars();
    animate();

    // Handle resize
    const handleResize = () => {
      resizeCanvas();
      createStars();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
};

export default StarField;