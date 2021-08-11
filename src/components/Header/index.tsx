import React, { useCallback, useContext, useState } from 'react';
import { AuthContext } from '../../hooks/auth';
import { Notifications } from '../Notifications';
import Breadcrum from '../Breadcrum';
import {
  Top,
  Bottom,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Container,
  NotificationWrapper,
  ProfileHeader,
  ProfileEdit,
  ProfileIcon,
  ExitIcon,
} from './styles';

interface HeaderParams {
  busca?: string;
  setBusca?: (value: string) => void;
  placeholder?: string;
}

export default function Header({
  busca,
  setBusca,
  placeholder = 'Buscar na Lista',
}: HeaderParams) {
  const { user, signOut } = useContext(AuthContext);
  const [openProfile, setOpenProfile] = useState(false);

  const handleSetBusca = useCallback(
    ev => {
      if (setBusca) {
        setBusca(ev.target.value);
      }
    },
    [setBusca],
  );
  return (
    <Container>
      <Top>
        <SearchWrapper>
          <SearchInput
            placeholder={placeholder}
            value={busca}
            onChange={ev => handleSetBusca(ev)}
          />
          <SearchIcon />
        </SearchWrapper>
        <NotificationWrapper>
          <Notifications />
        </NotificationWrapper>
        <ProfileHeader
          onClick={() => {
            setOpenProfile(!openProfile);
          }}
        >
          <img
            src={user?.avatar_url || undefined}
            alt={user?.name || 'DarkSpider Inc.'}
          />
          <strong>{user?.name}</strong>
        </ProfileHeader>
        <ProfileEdit
          className="dropdown-menu dropdown-menu-right show"
          style={{ display: openProfile ? 'block' : 'none' }}
        >
          <div
            className="dropdown-menu dropdown-menu-right"
            style={{ display: openProfile ? 'block' : 'none' }}
          >
            <div className="dropdown-header dropdown-header-title">
              <h6>Welcome!</h6>
            </div>
            <div className="dropdown-divider" />

            <button type="button" className="dropdown-item">
              <ProfileIcon />
              <span>Meu Perfil</span>
            </button>

            <button
              type="button"
              onClick={() => signOut()}
              className="dropdown-item"
            >
              <ExitIcon />
              <span>Logout</span>
            </button>
          </div>
        </ProfileEdit>
      </Top>
      <Bottom>
        <Breadcrum />
      </Bottom>
    </Container>
  );
}
