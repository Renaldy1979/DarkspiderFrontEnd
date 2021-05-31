import React from 'react';
import BottomMenu from '../../components/BottomMenu';
import MenuBar from '../../components/MenuBar';
import SideBar from '../../components/SideBar';
import Header from '../../components/Header';
import {
  Container,
  Wrapper,
  Content,
  Title,
  Main,
  GridContainer,
  GridItem,
  Card,
  CardHeader,
  CardIcon,
  Icon,
  CardFooter,
} from './styles';

const Initial = (): JSX.Element => {
  return (
    <Container>
      <Wrapper>
        <MenuBar />
        <Content>
          <Header />
          <Title>
            <strong>Página Inicial</strong>
          </Title>
          <Main>
            <GridContainer>
              <GridItem>
                <Card>
                  <CardHeader>
                    <CardIcon color="#ff00ff">
                      <Icon />
                    </CardIcon>
                  </CardHeader>
                  <CardFooter>
                    <h2>
                      49/50 <small>PROJETOS</small>
                    </h2>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      Mais detalhes
                    </a>
                  </CardFooter>
                </Card>
              </GridItem>
            </GridContainer>
          </Main>
          <BottomMenu />
        </Content>
        <SideBar />
      </Wrapper>
    </Container>
  );
};

export default Initial;
