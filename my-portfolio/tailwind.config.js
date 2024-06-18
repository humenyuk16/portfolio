export const purge = ['./index.html', './src/**/*.{js,jsx,ts,tsx}'];
export const darkMode = false;
export const theme = {
  extend: {
    backdropBlur: {
      sm: '4px',
      DEFAULT: '5px',
      md: '6px',
      lg: '8px',
      xl: '12px',
    },
    backgroundImage: {
      'bg-image': "url('./src/assets/images/bg.jpg')",
      'bg-image-line': "url('./src/assets/images/Frame.png')",
      "elips": "url('./src/assets/images/Ellipse13.png')",
      'custom-gradient': 'linear-gradient(45deg, #eac2b1, #f6e3e4, #f6cdd4)',
      'section-gradient': 'linear-gradient(to bottom, #fcecce, #ffffff)',
    },
    backgroundColor: {
      'white-70': 'rgba(255, 255, 255, 0.4)',
      'custom-color-40': 'rgba(248, 173, 184, 0.2)',
    },
    colors: {
      'bg-color': '#eac2b1',
      'text-color': '#8E5757',
      'custom-gradient': 'linear-gradient(45deg, #eac2b1, #f6e3e4, #f8adb8)'
    },
    fontFamily: {
      'junge': ['Junge', 'serif'],
    }
  },
};
export const variants = {
  extend: {
    backdropBlur: ['responsive'],
      backgroundColor: ['responsive', 'hover', 'focus'],
  },
};
export const plugins = [
  require('@tailwindcss/forms'),
  require('@tailwindcss/aspect-ratio'),
  
];