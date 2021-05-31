import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { api } from '../services/api';

interface SignInCredentials {
  email: string;
  password: string;
}

interface User {
  id: string;
  email: string;
  roles: string[];
  permissions: string[];
  avatar_url: string;
  name: string;
}

interface AuthContextData {
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): Promise<void>;
  isAuthenticated: boolean;
  user: User | undefined;
}

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps): JSX.Element {
  const [user, setUser] = useState<User>({} as User);
  const isAuthenticated = !!user;
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem('@DarkSpider:token');

    if (token) {
      api
        .get('/profile')
        .then(response => {
          const {
            id,
            roles,
            email,
            avatar_url,
            name,
            permissions,
          } = response.data;

          setUser({ id, email, roles, avatar_url, name, permissions });
        })
        .catch(() => {
          localStorage.removeItem('@DarkSpider:token');
          localStorage.removeItem('@DarkSpider:refresh_token');
          history.push('/');
        });
    }
  }, [history]);
  async function signIn({ email, password }: SignInCredentials) {
    try {
      const response = await api.post('/sessions', {
        email,
        password,
      });

      const {
        token,
        refresh_token,
        sub: id,
        roles,
        permissions,
        avatar_url,
        name,
      } = response.data;

      localStorage.setItem('@DarkSpider:token', token);
      localStorage.setItem('@DarkSpider:refresh_token', refresh_token);

      setUser({
        id,
        roles,
        email,
        avatar_url,
        name,
        permissions,
      });

      api.defaults.headers.Authorization = `Bearer ${token}`;
      history.push('/initial');
    } catch (err) {
      console.log(err);
    }
  }

  async function signOut() {
    localStorage.removeItem('@DarkSpider:token');
    localStorage.removeItem('@DarkSpider:refresh_token');
    history.push('/');
  }

  return (
    <AuthContext.Provider value={{ signIn, signOut, isAuthenticated, user }}>
      {children}
    </AuthContext.Provider>
  );
}
