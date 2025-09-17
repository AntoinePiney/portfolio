'use client';

import { useEffect } from 'react';

const colors = [
  '#070707', // black
  '#ffffff', // white
  '#c9c9c9', // grey
  '#ffe77d', // yellow
  '#ff7519', // orange
  '#D5B0FE', // mauve
  '#EEEDE9', // bwhite
  '#F5F1E5', // beige
  '#79A7B8', // blue
  '#EE97D4', // rose
];

export default function DynamicFavicon() {
  useEffect(() => {
    // Sélectionner une couleur aléatoire
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    // Créer un SVG favicon avec la couleur aléatoire
    const svgFavicon = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32">
        <rect width="32" height="32" fill="${randomColor}" rx="4"/>
        <text x="16" y="22" font-family="Arial, sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="${randomColor === '#ffffff' || randomColor === '#EEEDE9' || randomColor === '#F5F1E5' ? '#070707' : '#ffffff'}"></text>
      </svg>
    `;
    
    // Encoder le SVG en base64
    const encodedSvg = encodeURIComponent(svgFavicon);
    const dataUrl = `data:image/svg+xml,${encodedSvg}`;
    
    // Trouver et mettre à jour le favicon
    let favicon = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
    
    if (!favicon) {
      favicon = document.createElement('link');
      favicon.rel = 'icon';
      document.head.appendChild(favicon);
    }
    
    favicon.href = dataUrl;
    
    // Mettre à jour aussi le shortcut icon
    let shortcutIcon = document.querySelector('link[rel="shortcut icon"]') as HTMLLinkElement;
    if (!shortcutIcon) {
      shortcutIcon = document.createElement('link');
      shortcutIcon.rel = 'shortcut icon';
      document.head.appendChild(shortcutIcon);
    }
    shortcutIcon.href = dataUrl;
    
  }, []);

  return null; // Ce composant ne rend rien visuellement
}
