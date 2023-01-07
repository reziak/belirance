import { styled } from '../../../../styles'

export const HeaderContainer = styled('header', {
  width: '100%',
  backgroundColor: '$gray900',
  boxShadow: '0 8px 15px -4px $gray900',
})

export const HeaderContent = styled('div', {
  width: '100%',
  maxWidth: 1200,
  margin: '0 auto',
  padding: '1rem 2rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const HeaderActions = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  gap: '0.5rem',

  button: {
    backgroundColor: 'transparent',
    color: '$white',
    fontSize: '0.875rem',
    letterSpacing: 2,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontFamily: 'Roboto Condensed',
    padding: '0.5rem 1rem',
    border: '2px solid $gray500',
    borderRadius: 8,
    transition: 'border-color 0.3s ease-in-out, color 0.2s ease-in-out',

    '&:hover': {
      borderColor: '$gray200',
    },
  },
})
