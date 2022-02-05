module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'bottom-pattern': "url('/public/images/bg-pattern-bottom.svg')",
        'header-pattern': "url('/public/images/bg-pattern-card.svg')",
        'top-pattern': "url('/public/images/bg-pattern-top.svg')",
      },
      colors: {
        darkCyan: 'hsl(185, 75%, 39%)',
        desaturatedBlue: 'hsl(229, 23%, 23%)',
        grayishBlue: 'hsl(227, 10%, 46%)',
        darkGray: 'hsl(0, 0%, 59%)',
      },
      fontSize: {
        '2xs': '.55rem',
        small: '.78rem',
      },
      letterSpacing: {
        widest: '0.15em',
      },
      spacing: {
        '26rem': '26rem',
        '39rem': '39rem',
      },
      zIndex: {
        back: '-1',
      },
    },
  },
  plugins: [],
};
