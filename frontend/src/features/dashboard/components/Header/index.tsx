import { Belirance } from '../../../../components/Belirance'
import { useAuth } from '../../../auth/hooks/useAuth'

import { HeaderActions, HeaderContainer, HeaderContent } from './styles'

export const Header = () => {
  const { signOut, user } = useAuth()

  return (
    <HeaderContainer>
      <HeaderContent>
        <Belirance />
        <HeaderActions>
          <p>{user}</p>
          <button onClick={signOut}>Sair</button>
        </HeaderActions>
      </HeaderContent>
    </HeaderContainer>
  )
}
