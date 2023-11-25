import { useAuth } from '@/hooks/contexts/useAuth';

import { Container } from './menu.styles';

import { MenuItemFunction, MenuItemNavigate } from './item/Item';

export function Menu() {
  const { logout } = useAuth()

  return (
    <Container>
      <MenuItemFunction
        icon='md-checkmark-circle'
        label='Teste'
        onClick={() => {}}
      /> 
      <MenuItemFunction
        icon='md-log-out-sharp'
        label='Log out'
        onClick={logout}
      /> 
    </Container>
  )
}

