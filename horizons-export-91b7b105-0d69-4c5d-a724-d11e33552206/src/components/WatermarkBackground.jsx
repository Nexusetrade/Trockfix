import React from 'react';

const WatermarkBackground = ({ className = "" }) => {
  // SVG encoded as data URI
  // Text: TrockFix, Rotated -45deg, Bold
  // Using black with very low opacity to create a subtle gray watermark effect on white/light backgrounds
  const svgString = encodeURIComponent(`
    <svg width="300" height="300" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
      <style>
        .text { 
          font-family: system-ui, -apple-system, sans-serif; 
          font-weight: 800; 
          font-size: 40px; 
          fill: #000000; 
          opacity: 0.04;
        }
      </style>
      <text x="50%" y="50%" class="text" text-anchor="middle" dominant-baseline="middle" transform="rotate(-45 150 150)">
        TrockFix
      </text>
    </svg>
  `);
  
  const backgroundStyle = {
    backgroundImage: `url("data:image/svg+xml;charset=utf-8,${svgString}")`,
    backgroundRepeat: 'repeat',
    backgroundPosition: 'center',
    backgroundSize: '300px 300px'
  };

  return (
    <div 
      className={`absolute inset-0 pointer-events-none z-0 overflow-hidden ${className}`}
      style={backgroundStyle}
      aria-hidden="true"
    />
  );
};

export default WatermarkBackground;