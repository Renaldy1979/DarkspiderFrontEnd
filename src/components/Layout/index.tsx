import React, { ReactNode } from 'react';
import BottomMenu from '../BottomMenu';
import Header from '../Header';
import MenuBar from '../MenuBar';

import { Container, Content, HeadBottom, Pages } from './styles';

interface LayoutProps {
  children: ReactNode;
  propsHeader?: {
    busca: string;
    setBusca: (value: string) => void;
    placeholder: string;
  };
}
export default function Layout({ children, propsHeader }: LayoutProps) {
  return (
    <Container>
      <MenuBar />
      <Content>
        <Header {...propsHeader} />
        <HeadBottom />
        <Pages>{children}</Pages>
      </Content>
      <BottomMenu />
    </Container>
  );
}
