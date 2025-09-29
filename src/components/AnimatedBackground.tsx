'use client';

import { useEffect, useRef, useState } from 'react';

interface Point {
  x: number;
  y: number;
  vx: number;
  vy: number;
  opacity: number;
}

interface Line {
  from: Point;
  to: Point;
  opacity: number;
}

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const mousePositionRef = useRef({ x: 0, y: 0 });
  const pointsRef = useRef<Point[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize points
    const initPoints = () => {
      // More reasonable dot count based on screen size
      let numPoints;
      if (canvas.width < 768) {
        // Mobile: fewer dots for better performance
        numPoints = 15 + Math.floor(canvas.width / 100);
      } else if (canvas.width < 1024) {
        // Tablet: medium number of dots
        numPoints = 25 + Math.floor(canvas.width / 80);
      } else {
        // Desktop: more dots for richer effect
        numPoints = 100 + Math.floor(canvas.width / 60);
      }

      // Cap the maximum number of dots for performance
      numPoints = Math.min(numPoints, 100);

      pointsRef.current = Array.from({ length: numPoints }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.2,
      }));
    };

    initPoints();

    // Update mouse position (no state update to avoid rerenders)
    const handleMouseMove = (e: MouseEvent) => {
      mousePositionRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update points
      pointsRef.current.forEach(point => {
        point.x += point.vx;
        point.y += point.vy;

        // Bounce off edges
        if (point.x < 0 || point.x > canvas.width) point.vx *= -1;
        if (point.y < 0 || point.y > canvas.height) point.vy *= -1;

        // Keep within bounds
        point.x = Math.max(0, Math.min(canvas.width, point.x));
        point.y = Math.max(0, Math.min(canvas.height, point.y));
      });

      // Draw connections
      const maxDistance = 200;
      const mouseInfluence = 250;
      const mousePos = mousePositionRef.current;

      for (let i = 0; i < pointsRef.current.length; i++) {
        const point1 = pointsRef.current[i];

        // Draw point
        ctx.beginPath();
        ctx.arc(point1.x, point1.y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(236, 72, 153, ${point1.opacity})`;
        ctx.fill();

        // Connect to other points
        for (let j = i + 1; j < pointsRef.current.length; j++) {
          const point2 = pointsRef.current[j];
          const distance = Math.sqrt(Math.pow(point1.x - point2.x, 2) + Math.pow(point1.y - point2.y, 2));

          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * 0.55;
            ctx.beginPath();
            ctx.moveTo(point1.x, point1.y);
            ctx.lineTo(point2.x, point2.y);
            ctx.strokeStyle = `rgba(236, 72, 153, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }

        // Connect to mouse if close enough
        const mouseDistance = Math.sqrt(Math.pow(point1.x - mousePos.x, 2) + Math.pow(point1.y - mousePos.y, 2));

        if (mouseDistance < mouseInfluence) {
          const opacity = (1 - mouseDistance / mouseInfluence) * 0.75;
          ctx.beginPath();
          ctx.moveTo(point1.x, point1.y);
          ctx.lineTo(mousePos.x, mousePos.y);
          ctx.strokeStyle = `rgba(168, 85, 247, ${opacity})`;
          ctx.lineWidth = 1;
          ctx.stroke();

          // Add some purple points around mouse
          ctx.beginPath();
          ctx.arc(mousePos.x, mousePos.y, 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(168, 85, 247, ${opacity * 0.8})`;
          ctx.fill();
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []); // No dependencies - animation runs independently

  return (
    <canvas ref={canvasRef} className='fixed inset-0 z-0 pointer-events-none' style={{ background: 'transparent' }} />
  );
};

export default AnimatedBackground;
