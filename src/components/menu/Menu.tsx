import { useAuth } from '@/hooks/contexts/useAuth';

import { Container } from './menu.styles';

import { MenuItemFunction, MenuItemNavigate } from './item/Item';
import { ROUTE } from '@/config/route';

export function Menu() {
  const { logout } = useAuth()

  return (
    <Container>
      <MenuItemNavigate
        icon='albums'
        label='Profile'
        to={ROUTE.APP.PROFILE}
        params={undefined}
      />
      <MenuItemNavigate
        icon='home'
        label='Home'
        to={ROUTE.APP.HOME}
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

