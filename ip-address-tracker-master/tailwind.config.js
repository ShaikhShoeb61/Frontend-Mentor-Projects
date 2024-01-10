
// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-section': "url('/images/pattern-bg-mobile.png')",
        'hero-section-desktop': "url('/images/pattern-bg-desktop.png')",
      },
    
      colors: {
        VDG: 'hsl(0, 0%, 17%)',
        DG: 'hsl(0, 0%, 59%)',
      },
    },
  },
  plugins: [],
};
