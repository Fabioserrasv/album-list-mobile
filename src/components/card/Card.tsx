
import { Container, Content, Title } from './card.styles';
import { ReactNode } from 'react';

type CardProps = {
  title: string;
  children: ReactNode;
  height?: number;
}

export function Card({ title, children, height }: CardProps) {
  return (
    <Container height={height}>
      <Title>{title}</Title>

      <Content>
        {children}
      </Content>
    </Container>
  )
}

