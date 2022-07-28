import { defineConfig } from 'windicss/helpers'
import plugin from 'windicss/plugin'

function range(size: any, startAt = 1) {
  return Array.from(Array(size).keys()).map((i) => i + startAt)
}

export default defineConfig({
  extract: {
    include: ['**/*.{vue,html,jsx,tsx}'],
    exclude: ['node_modules', '.git'],
  },
  // safelist: [
  //   range(30).map(i => `p-${i}`),
  //   range(10).map(i => `mt-${i}`),
  // ],
  theme: {
    fontSize: {
      '2xs': '.825rem',
      xs: '.9rem',
      sm: '.955rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    extend: {
      // fontFamily: {
      //   sans: ['Inter', 'sans-serif'],
      // },
      textColor: {
        'main-darker': '#1d2b36',
        'main-dark': '#314351',
        'main-base': '#556575',
        'main-light': '#a2a7b5',
        'main-lighter': '#c0c5d3',
        'main-lightest': '#d4d6de',
        primary: '#ff5745',
        secondary: '#5598ea',
        info: '#76d895',
        danger: '#e3342f',
      },
    },
  },
  shortcuts: {
    boxed: 'px-4 lg:px-0 lg:container lg:mx-auto',
    'lg-boxed': 'lg:container lg:mx-auto',
    'mobile-spacer': '<lg:px-4',
    'page-header':
      'mx-auto text-heading text-main-darker text-4xl lg:text-5xl font-bold max-w-3xl leading-12',
    'page-tagline': 'mt-6 px-6 text-sm lg:text-lg inline-flex max-w-xl',
  },
  plugins: [
    plugin(({ addUtilities }) => {
      const newUtilities = {
        '.text-heading': {
          'font-family': `'PlusJakartaSans-Medium', sans-serif`,
          'letter-spacing': '-0.035em',
        },
      }
      addUtilities(newUtilities)
    }),
    require('windicss/plugin/aspect-ratio'),
    require('windicss/plugin/forms'),
    require('windicss/plugin/line-clamp'),
    require('@windicss/plugin-animations')({
      settings: {
        animatedSpeed: 1000,
        heartBeatSpeed: 1000,
        hingeSpeed: 2000,
        bounceInSpeed: 750,
        bounceOutSpeed: 750,
        animationDelaySpeed: 1000,
      },
    }),
  ],
})
