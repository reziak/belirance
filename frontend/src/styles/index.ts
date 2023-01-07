import { createStitches } from '@stitches/react'

export const {
  config,
  styled,
  css,
  globalCss,
  getCssText,
  keyframes,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      white: '#FFF',
      gray100: '#EDEDED',
      gray200: '#C6C6C8',
      gray300: '#A4A4A6',
      gray400: '#828284',
      gray500: '#666668',
      gray600: '#424244',
      gray700: '#3d3d3e',
      gray800: '#2b2b2b',
      gray900: '#141414',
      teal: '#36e1bb',
      magenta: '#fa42a1',

      teal50pct: 'rgba(54, 225, 187, 0.5)',
      magenta50pct: 'rgba(250, 66, 161, 0.2)',

      'teal-to-magenta-h': 'linear-gradient(to right, #36e1bb, #fa42a1)',
      'teal-to-magenta-v': 'linear-gradient(to top, #36e1bb, #fa42a1)',
      'magenta-to-teal-h': 'linear-gradient(to left, #36e1bb, #fa42a1)',
      'magenta-to-teal-v': 'linear-gradient(to top, #36e1bb, #fa42a1)',
    },
    shadows: {
      gray900: '#141414',
      teal: '#36e1bb',
    },
  },
})
