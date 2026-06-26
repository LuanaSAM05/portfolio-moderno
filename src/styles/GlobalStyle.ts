import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=JetBrains+Mono:wght@400;500&display=swap');

  :root {
    --font-sans: 'Outfit', sans-serif;
    --font-serif: 'Playfair Display', serif;
    --font-mono: 'JetBrains Mono', monospace;
  }

  /* Fluid page structure */
  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    overflow-x: hidden;
    scroll-behavior: smooth;
    font-family: var(--font-sans);
    background-color: #000000;
  }

  /* Custom scrollbars */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: #8b5cf699;
    border-radius: 999px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #7843f199;
  }

  /* Universal Transitions */
  .theme-transition {
    transition: background-color 0.8s cubic-bezier(0.76, 0, 0.24, 1), 
                border-color 0.8s cubic-bezier(0.76, 0, 0.24, 1), 
                color 0.6s cubic-bezier(0.76, 0, 0.24, 1);
  }

  /* Utility custom scrollbar classes or resets if any */
`;
