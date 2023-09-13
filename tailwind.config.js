import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{html,js,ts,svelte}'],
  theme: {
    colors: {
      'soft-red': 'hsl(10, 79%, 65%)',
      cyan: 'hsl(186, 34%, 60%)',
      'dark-brown': 'hsl(25, 47%, 15%)',
      'medium-brown': 'hsl(28, 10%, 53%)',
      cream: 'hsl(27, 66%, 92%)',
      'very-pale-orange': 'hsl(33, 100%, 98%)',
    },
    fontFamily: {
      'dm-sans': ['DM Sans', ...defaultTheme.fontFamily.sans],
    },
  },
};
