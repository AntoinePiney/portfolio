import { NextRequest, NextResponse } from 'next/server';

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

export async function GET(request: NextRequest) {
  // Sélectionner une couleur aléatoire
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  
  // Créer un SVG favicon avec la couleur aléatoire
  const svgFavicon = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32">
      <rect width="32" height="32" fill="${randomColor}" rx="4"/>
      <text x="16" y="22" font-family="Arial, sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="${randomColor === '#ffffff' || randomColor === '#EEEDE9' || randomColor === '#F5F1E5' ? '#070707' : '#ffffff'}">A</text>
    </svg>
  `;
  
  // Retourner le SVG avec les bons headers
  return new NextResponse(svgFavicon, {
    status: 200,
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0',
    },
  });
}
