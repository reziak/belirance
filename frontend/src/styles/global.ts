import { globalCss, keyframes } from '.'

export const rotateGradient = keyframes({
  '0%': { backgroundImage: 'linear-gradient(0deg, $magenta, $teal)' },
  '10%': { backgroundImage: 'linear-gradient(36deg, $magenta, $teal)' },
  '20%': { backgroundImage: 'linear-gradient(72deg, $magenta, $teal)' },
  '30%': { backgroundImage: 'linear-gradient(108deg, $magenta, $teal)' },
  '40%': { backgroundImage: 'linear-gradient(144deg, $magenta, $teal)' },
  '50%': { backgroundImage: 'linear-gradient(180deg, $magenta, $teal)' },
  '60%': { backgroundImage: 'linear-gradient(216deg, $magenta, $teal)' },
  '70%': { backgroundImage: 'linear-gradient(252deg, $magenta, $teal)' },
  '80%': { backgroundImage: 'linear-gradient(288deg, $magenta, $teal)' },
  '90%': { backgroundImage: 'linear-gradient(324deg, $magenta, $teal)' },
  '100%': { backgroundImage: 'linear-gradient(360deg, $magenta, $teal)' },
})

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  body: {
    '-webkit-font-smoothing': 'antialiased',
    backgroundColor: '$gray800',
    color: '$gray100',
  },
  'body, input, textarea, button': {
    fontFamily: 'Roboto',
    fontWeight: 400,
  },
  button: {
    cursor: 'pointer',
    border: 0,
    borderRadius: 4,
  },
})
