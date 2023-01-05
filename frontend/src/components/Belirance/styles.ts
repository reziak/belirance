import { styled } from '../../styles'

export const Logo = styled('h1', {
  fontFamily: 'Roboto condensed',
  textTransform: 'uppercase',
  letterSpacing: 4,
  textAlign: 'center',
  width: 200,

  '&:before': {
    content: '',
    display: 'block',
    height: 4,
    borderRadius: 4,
    width: 'calc(100% - 4px)',
    backgroundImage: '$teal-to-magenta-h',
  },

  '&:after': {
    content: '',
    display: 'block',
    height: 4,
    borderRadius: 4,
    width: 'calc(100% - 4px)',
    backgroundImage: '$magenta-to-teal-h',
  },
})
