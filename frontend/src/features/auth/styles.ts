import { styled } from '../../styles'

export const HomeContainer = styled('main', {
  height: '100vh',
  position: 'relative',
  backgroundImage:
    'linear-gradient(to bottom, $gray800, transparent), linear-gradient(to top, $gray800, transparent), $magenta-to-teal-v',
  backgroundSize: '100% 100px, 100% 100px, 10px 100%',
  backgroundPosition: 'top center, bottom center, top right',
  backgroundRepeat: 'no-repeat',
})

export const Card = styled('div', {
  padding: '4rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translateX(-50%) translateY(-50%)',
  boxShadow: '0 8px 15px -4px $gray900',
  borderRadius: 8,
  border: '1px solid $gray700',
  backgroundColor: '$gray800',
  width: '100%',
  maxWidth: 400,

  p: {
    maxWidth: 300,
    textAlign: 'center',
    margin: '2rem 0',
    lineHeight: 1.3,
  },
})

export const SignInForm = styled('form', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  marginTop: '1rem',
})

export const FormGroups = styled('div', {
  padding: '0.5rem',

  label: {
    display: 'block',
    fontFamily: 'Roboto Condensed',
    fontSize: '0.75rem',
    color: '$gray400',
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  input: {
    width: '100%',
    backgroundColor: 'transparent',
    padding: '0.5rem',
    color: '$white',
    border: 0,
    borderBottom: '1px solid $gray100',
  },
})

export const SignInButton = styled('button', {
  backgroundColor: 'transparent',
  color: '$white',
  fontSize: '1rem',
  textAlign: 'center',
  gap: '0.5rem',
  padding: '1rem 2rem',
  border: '2px solid $gray500',
  borderRadius: 8,
  transition: 'border-color 0.3s ease-in-out, color 0.2s ease-in-out',

  '&:hover': {
    borderColor: '$gray200',
  },
})
