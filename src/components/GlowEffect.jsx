import React, { useEffect, useRef } from 'react';

const GlowEffect = ({ 
  width = 'auto', 
  height = 'auto',
  intensity = 0.2,
  boxDensity = 1,
  color = '#66ffff',
  position = 'center',
  className = '',
  scale = 1,
  blurLevel = '3xl' // Can be '2xl', '3xl', or a specific value
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const createGlowingBoxes = () => {
      if (!containerRef.current) return;
      
      // Clear previous animation elements
      const existingBoxes = containerRef.current.querySelectorAll('.animated-box');
      existingBoxes.forEach(box => box.remove());
      
      const existingGlows = containerRef.current.querySelectorAll('.glow-effect');
      existingGlows.forEach(glow => glow.remove());
      
      // Box sizes and their frequencies - adjust density based on prop
      const boxSizes = [
        { size: 'w-2 h-2', frequency: Math.floor(10 * boxDensity) },
        { size: 'w-3 h-3', frequency: Math.floor(8 * boxDensity) },
        { size: 'w-4 h-4', frequency: Math.floor(6 * boxDensity) },
        { size: 'w-6 h-6', frequency: Math.floor(5 * boxDensity) },
        { size: 'w-8 h-8', frequency: Math.floor(4 * boxDensity) },
        { size: 'w-12 h-12', frequency: Math.floor(3 * boxDensity) },
        { size: 'w-16 h-16', frequency: Math.floor(2 * boxDensity) },
      ];
      
      // Get container dimensions
      const container = containerRef.current;
      const containerWidth = container.offsetWidth;
      const containerHeight = container.offsetHeight;
      
      // Apply scale factor for glow size
      const scaleFactor = typeof scale === 'number' ? scale : 1;
      
      // Create and position the main glow effect
      const mainGlow = document.createElement('div');
      mainGlow.className = `absolute glow-effect rounded-full filter blur-${blurLevel} animate-pulse-scale`;
      mainGlow.style.backgroundColor = color;
      mainGlow.style.opacity = intensity.toString();
      
      // Calculate glow size based on container and scale
      let glowSize = Math.min(containerWidth, containerHeight) * 0.6 * scaleFactor;
      
      // Make sure large screens have minimum size
      if (window.innerWidth >= 1024) {
        glowSize = Math.max(glowSize, 300 * scaleFactor);
      }
      
      mainGlow.style.width = `${glowSize}px`;
      mainGlow.style.height = `${glowSize}px`;
      
      // Position the glow based on the position prop
      let leftPos, topPos;
      
      switch (position) {
        case 'top-left':
          leftPos = glowSize / 2;
          topPos = glowSize / 2;
          break;
        case 'top-right':
          leftPos = containerWidth - glowSize / 2;
          topPos = glowSize / 2;
          break;
        case 'bottom-left':
          leftPos = glowSize / 2;
          topPos = containerHeight - glowSize / 2;
          break;
        case 'bottom-right':
          leftPos = containerWidth - glowSize / 2;
          topPos = containerHeight - glowSize / 2;
          break;
        case 'right':
          leftPos = containerWidth - glowSize / 2;
          topPos = containerHeight / 2;
          break;
        case 'left':
          leftPos = glowSize / 2;
          topPos = containerHeight / 2;
          break;
        case 'top':
          leftPos = containerWidth / 2;
          topPos = glowSize / 2;
          break;
        case 'bottom':
          leftPos = containerWidth / 2;
          topPos = containerHeight - glowSize / 2;
          break;
        default: // center
          leftPos = containerWidth / 2;
          topPos = containerHeight / 2;
      }
      
      // For small screens, adjust positioning if necessary
      if (window.innerWidth < 768) {
        // Ensure glow is visible even on small screens
        glowSize = Math.min(glowSize, containerWidth * 0.8);
        mainGlow.style.width = `${glowSize}px`;
        mainGlow.style.height = `${glowSize}px`;
      }
      
      mainGlow.style.left = `${leftPos}px`;
      mainGlow.style.top = `${topPos}px`;
      mainGlow.style.transform = 'translate(-50%, -50%)';
      container.appendChild(mainGlow);
      
      // Increase box count for large screens
      const screenSizeMultiplier = window.innerWidth >= 1024 ? 1.5 : 1;
      
      // Create smaller glowing boxes
      boxSizes.forEach(({ size, frequency }) => {
        for (let i = 0; i < frequency * screenSizeMultiplier; i++) {
          const box = document.createElement('div');
          box.className = `absolute ${size} opacity-0 rounded-sm animated-box animate-float-grow`;
          box.style.backgroundColor = color;
          
          // Random position centered around the glow
          const centerX = parseFloat(mainGlow.style.left);
          const centerY = parseFloat(mainGlow.style.top);
          
          // Distribution radius (50-80% of glow size)
          const radius = glowSize * (0.5 + Math.random() * 0.3);
          const angle = Math.random() * Math.PI * 2;
          
          const offsetX = Math.cos(angle) * radius;
          const offsetY = Math.sin(angle) * radius;
          
          box.style.left = `${centerX + offsetX}px`;
          box.style.top = `${centerY + offsetY}px`;
          
          // Random animation delay and duration for more organic feel
          box.style.animationDelay = `${Math.random() * 5}s`;
          box.style.animationDuration = `${5 + Math.random() * 5}s`;
          
          container.appendChild(box);
        }
      });
    };
    
    createGlowingBoxes();
    
    // Re-create animation on window resize
    window.addEventListener('resize', createGlowingBoxes);
    
    return () => {
      window.removeEventListener('resize', createGlowingBoxes);
    };
  }, [color, intensity, boxDensity, position, scale, blurLevel]);

  return (
    <div 
      ref={containerRef} 
      className={`relative overflow-hidden ${className}`} 
      style={{ 
        width: width, 
        height: height,
        position: 'relative' 
      }}
    />
  );
};

export default GlowEffect;