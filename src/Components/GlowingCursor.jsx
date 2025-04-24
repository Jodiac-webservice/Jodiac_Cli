import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useAnimation } from 'framer-motion';
import './GlowingCursor.css';

const GlowingCursor = () => {
  const [isActive, setIsActive] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const lastPosition = useRef({ x: 0, y: 0 });
  const velocityRef = useRef({ x: 0, y: 0 });
  const particlesRef = useRef([]);
  const frameRef = useRef(0);

  // Core motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotation = useMotionValue(0);
  const hue = useMotionValue(40); // Base gold hue

  // Tail motion values - initialized directly in the component body
  const tails = useRef(
    Array.from({ length: 5 }).map((_, i) => ({
      x: useMotionValue(0),
      y: useMotionValue(0),
      opacity: useMotionValue(0.8 - i * 0.15),
      scale: useMotionValue(1 - i * 0.15),
      rotation: useMotionValue(0),
    }))
  );

  // Animation controllers
  const coreControls = useAnimation();
  const orbitControls = useAnimation();
  const rippleControls = useAnimation();

  // Particle update
  useEffect(() => {
    let prevTimestamp = 0;

    const updateParticles = (timestamp) => {
      const deltaTime = prevTimestamp ? (timestamp - prevTimestamp) / 1000 : 0.016;
      prevTimestamp = timestamp;

      particlesRef.current.forEach((particle) => {
        particle.x += particle.velocity.x * deltaTime * 60;
        particle.y += particle.velocity.y * deltaTime * 60;
        particle.angle += particle.rotationSpeed * deltaTime;
        particle.velocity.x *= 0.96;
        particle.velocity.y *= 0.96;
        particle.opacity *= 0.98;
        particle.scale *= 0.99;
      });

      if (isActive && Math.random() > 0.6) {
        const newParticle = {
          x: (Math.random() - 0.5) * 20,
          y: (Math.random() - 0.5) * 20,
          scale: Math.random() * 0.6 + 0.4,
          opacity: Math.random() * 0.8 + 0.2,
          velocity: {
            x: (Math.random() - 0.5) * 5 + velocityRef.current.x * 0.2,
            y: (Math.random() - 0.5) * 5 + velocityRef.current.y * 0.2,
          },
          angle: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.6,
        };

        particlesRef.current.push(newParticle);

        // Keep particle count manageable
        if (particlesRef.current.length > 20) {
          particlesRef.current.shift();
        }
      }

      frameRef.current = requestAnimationFrame(updateParticles);
    };

    frameRef.current = requestAnimationFrame(updateParticles);

    return () => {
      cancelAnimationFrame(frameRef.current);
    };
  }, [isActive]);

  // Mouse events handler
  useEffect(() => {
    let hoverCheckInterval;

    const handleMouseMove = (e) => {
      const newX = e.clientX;
      const newY = e.clientY;

      velocityRef.current = {
        x: newX - lastPosition.current.x,
        y: newY - lastPosition.current.y,
      };

      lastPosition.current = { x: newX, y: newY };

      mouseX.set(newX);
      mouseY.set(newY);

      const speed = Math.sqrt(
        velocityRef.current.x * velocityRef.current.x +
        velocityRef.current.y * velocityRef.current.y
      );
      hue.set(40 + Math.min(speed * 1.2, 25));

      if (Math.abs(velocityRef.current.x) > 0.5 || Math.abs(velocityRef.current.y) > 0.5) {
        const angle = Math.atan2(velocityRef.current.y, velocityRef.current.x);
        rotation.set((angle * 180) / Math.PI);
      }

      tails.current.forEach((tail, i) => {
        const delay = 30 + i * 40;

        setTimeout(() => {
          const variance = (i * 5) * (i % 2 === 0 ? 1 : -1);
          const angleVariance = (i * Math.PI / 8) * (i % 2 === 0 ? 1 : -1);

          tail.x.set(newX + Math.cos(rotation.get() + angleVariance) * variance);
          tail.y.set(newY + Math.sin(rotation.get() + angleVariance) * variance);
          tail.rotation.set((rotation.get() * 180 / Math.PI) + (i * 10));
        }, delay);
      });

      const element = document.elementFromPoint(e.clientX, e.clientY);
      if (element && (element.tagName === 'BUTTON' || element.tagName === 'A' ||
          element.classList.contains('hoverable'))) {
        if (!isHovering) {
          setIsHovering(true);
          coreControls.start({
            scale: 1.3,
            transition: { duration: 0.3 }
          });
        }
      } else if (isHovering) {
        setIsHovering(false);
        coreControls.start({
          scale: 1,
          transition: { duration: 0.3 }
        });
      }
    };

    const handleMouseDown = () => {
      setIsActive(true);
      rippleControls.start({
        scale: [1, 5],
        opacity: [0.8, 0],
        transition: { duration: 1 }
      });
      coreControls.start({
        scale: 1.8,
        filter: "blur(3px) brightness(1.4)",
        transition: { duration: 0.2 }
      });
      hue.set(20);
    };

    const handleMouseUp = () => {
      setIsActive(false);
      coreControls.start({
        scale: isHovering ? 1.3 : 1,
        filter: "blur(2px) brightness(1)",
        transition: { duration: 0.3 }
      });
      hue.set(40);
    };

    let idleTimeout;
    const checkIdle = () => {
      clearTimeout(idleTimeout);
      idleTimeout = setTimeout(() => {
        if (!isActive) {
          coreControls.start({
            scale: [1, 1.2, 0.9, 1],
            rotate: [0, -10, 10, 0],
            transition: { duration: 2 }
          });
        }
      }, 3000);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mousemove', checkIdle);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mousemove', checkIdle);
      clearTimeout(idleTimeout);
    };
  }, [mouseX, mouseY, coreControls, rippleControls, hue, rotation, isHovering]);

  return (
    <>
      {/* Render particle system */}
      {particlesRef.current.map((particle, index) => (
        <motion.div
          key={`particle-${index}`}
          className="cosmic-particle"
          style={{
            x: mouseX.get() + particle.x,
            y: mouseY.get() + particle.y,
            rotate: particle.angle * (180 / Math.PI),
            opacity: particle.opacity,
            scale: particle.scale,
          }}
        />
      ))}

      {/* Tail elements */}
      {tails.current.map((tail, index) => (
        <motion.div
          key={`tail-${index}`}
          className={`cosmic-tail cosmic-tail-${index + 1}`}
          style={{
            x: tail.x,
            y: tail.y,
            opacity: tail.opacity,
            scale: tail.scale,
            rotate: tail.rotation,
          }}
        />
      ))}
      <motion.div
        className="cosmic-orbit"
        style={{ x: mouseX, y: mouseY }}
        animate={orbitControls}
      />
      <motion.div
        className="cosmic-ripple"
        style={{ x: mouseX, y: mouseY }}
        animate={rippleControls}
      />
      <motion.div
        className="cosmic-core"
        style={{
          x: mouseX,
          y: mouseY,
          filter: `hue-rotate(${hue.get()}deg)`
        }}
        animate={coreControls}
      />
    </>
  );
};

export default GlowingCursor;