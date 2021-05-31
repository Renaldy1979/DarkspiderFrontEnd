import React, { useCallback, useContext, useState } from 'react';
import { AuthContext } from '../../hooks/auth';

import {
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Container,
  NotificationWrapper,
  Notification,
  BellIcon,
  ProfileHeader,
  ProfileEdit,
  ProfileIcon,
  ExitIcon,
} from './styles';

interface HeaderParams {
  busca?: string;
  setBusca?: (value: string) => void;
}

export default function Header({ busca, setBusca }: HeaderParams) {
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
      <SearchWrapper>
        <SearchInput
          placeholder="Buscar na Lista"
          value={busca}
          onChange={ev => handleSetBusca(ev)}
        />
        <SearchIcon />
      </SearchWrapper>
      <NotificationWrapper>
        <Notification />
        <BellIcon />
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
      <ProfileEdit>
        <div
          className="dropdown-menu dropdown-menu-right show"
          style={{ display: openProfile ? 'block' : 'none' }}
        >
          <div className="dropdown-header noti-title">
            <h6 className="text-overflow m-0">Welcome!</h6>
          </div>
          <button type="button" className="dropdown-item">
            <ProfileIcon />
            <span>Meu Perfil</span>
          </button>

          <div className="dropdown-divider" />
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
    </Container>
  );
}
