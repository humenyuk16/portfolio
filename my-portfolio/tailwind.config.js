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
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    backgroundImage: {
      'bg-image': "url('/assets/images/bg.jpg')",
      'bg-image-line': "url('/assets/images/Frame.png')",
      'drop-line': "url('/assets/images/drop_line.png')",
      'texture': "url('/assets/images/texture_bg.png')",
      'bg_section': "url('/assets/images/bg_section.png')",
      "elips": "url('/assets/images/Ellipse13.png')",
      'custom-gradient': 'linear-gradient(45deg, #eac2b1, #f6e3e4, #f6cdd4)',
      'section-gradient': 'linear-gradient(to bottom, #fcecce, #ffffff)',
    },
    backgroundColor: {
      'white-70': 'rgba(255, 255, 255, 0.4)',
      'custom-color-60': 'rgba(248, 173, 184, 0.6)',
      'custom-color-40': 'rgba(248, 173, 184, 0.2)',
      'custom-color-30': 'rgba(248, 173, 184, 0.1)',
      'custom-color2': 'rgba(248, 173, 184, 0.0)',
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