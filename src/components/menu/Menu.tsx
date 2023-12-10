import { useAuth } from '@/hooks/contexts/useAuth';

import { Container } from './menu.styles';

import { MenuItemFunction, MenuItemNavigate } from './item/Item';
import { ROUTE } from '@/config/route';

export function Menu() {
  const { logout } = useAuth()

  return (
    <Container>
      <MenuItemFunction
        icon='md-checkmark-circle'
        label='Home'
        onClick={() => {}}
      /> 
      <MenuItemNavigate
        icon='md-thumbs-up-sharp'
        label='Profile'
        to={ROUTE.APP.TEST}
        params={undefined}
      />
      <MenuItemFunction
        icon='md-log-out-sharp'
        label='Log out'
        onClick={logout}
      /> 
    </Container>
  )
}

