import { ReactNode } from 'react';
import { StatusBar } from 'expo-status-bar';

import { Container, Content, Title } from './page.styles';

import { useAuth } from '@/hooks/contexts/useAuth';
import { Menu } from '../menu/Menu';

type PageProps = {
  title?: string;
  children: ReactNode
}

export function Page({ children, title }: PageProps) {
  const { authed } = useAuth();

  return (
    <Container>
      <StatusBar style='inverted' />
      {title && <Title>{title}</Title>}
      <Content>
        {children}
      </Content>
      {authed && <Menu />}
    </Container>
  )
}

