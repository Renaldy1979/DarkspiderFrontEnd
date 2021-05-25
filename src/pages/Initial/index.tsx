import React from 'react';

import BottomMenu from '../../components/BottomMenu';
import MenuBar from '../../components/MenuBar';
import SideBar from '../../components/SideBar';
import {
  Container,
  Wrapper,
  Content,
  Header,
  Title,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  NotificationWrapper,
  Notification,
  BellIcon,
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
          <Header>
            <Title>
              <strong>Página Inicial</strong>
            </Title>
            <SearchWrapper>
              <SearchInput
                placeholder="Buscar na Lista"
                // value={busca}
                // onChange={ev => setBusca(ev.target.value)}
              />
              <SearchIcon />
            </SearchWrapper>
            <NotificationWrapper>
              <Notification />
              <BellIcon />
            </NotificationWrapper>
          </Header>
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
