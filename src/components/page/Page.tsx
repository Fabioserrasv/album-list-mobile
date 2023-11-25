import { ReactNode } from 'react';
import { StatusBar } from 'expo-status-bar';

import { Container, Content, ContentCenter, Title } from './page.styles';

import { useAuth } from '@/hooks/contexts/useAuth';
import { Menu } from '../menu/Menu';

type PageProps = {
  title?: string;
  children: ReactNode
} & ContentCenter;

export function Page({ children, title, contentCenter }: PageProps) {
  const { authed } = useAuth();

  return (
    <Container>
      <StatusBar style='dark' />
      {title && <Title>{title}</Title>}
      <Content contentCenter >
        {children}
      </Content>
      {authed && <Menu />}
    </Container>
  )
}

