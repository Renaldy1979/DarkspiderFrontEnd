import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useHistory } from 'react-router-dom';

import { api } from '../services/api';

interface SignInCredentials {
  email: string;
  password: string;
}

interface UserSignInData {
  user: {
    id: string;
    name: string;
    email: string;
    avatar_url: string;
    roles: Roles[];
  };
  token: string;
  refresh_token: string;
}

interface User {
  id: string;
  name: string;
  email: string;
  roles: string[];
  permissions: string[];
  avatar_url: string;
}

interface UserProfile {
  id: string;
  email: string;
  roles: Roles[];
  avatar_url: string;
  name: string;
}

interface Roles {
  name: string;
  permissions: Permisions[];
}

interface Permisions {
  name: string;
}

interface AuthContextData {
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): Promise<void>;
  isAuthenticated(): boolean;
  user: User | undefined;
}

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const history = useHistory();

  const [user, setUser] = useState<User>({} as User);
  const isAuthenticated = useCallback(() => {
    const token = localStorage.getItem('@DarkSpider:token');
    if (token) {
      return true;
    }
    return false;
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('@DarkSpider:token');
    if (token) {
      api
        .get<UserProfile>('/profile')
        .then(response => {
          const { id, name, email, roles, avatar_url } = response.data;
          const userRoles = roles.map(role => role.name);
          const permissions = roles
            .map(rolePermission =>
              rolePermission.permissions.map(permission => permission.name),
            )
            .toString()
            .split(',');

          const userPermissions = permissions.filter(
            (este, i) => permissions.indexOf(este) === i,
          );

          setUser({
            id,
            email,
            roles: userRoles,
            avatar_url,
            name,
            permissions: userPermissions,
          });
        })
        .catch(() => {
          signOut();
        });
    }
  }, []);

  async function signIn({ email, password }: SignInCredentials) {
    const response = await api.post<UserSignInData>('/sessions', {
      email,
      password,
    });
    const { token, refresh_token } = response.data;
    const { name, avatar_url, roles, id } = response.data.user;
    const userRoles = roles.map(role => role.name);
    const permissions = roles
      .map(rolePermission =>
        rolePermission.permissions.map(permission => permission.name),
      )
      .toString()
      .split(',');

    const userPermissions = permissions.filter(
      (este, i) => permissions.indexOf(este) === i,
    );

    const userData: User = {
      id,
      name,
      email,
      roles: userRoles,
      permissions: userPermissions,
      avatar_url,
    };

    localStorage.setItem('@DarkSpider:token', token);
    localStorage.setItem('@DarkSpider:refresh_token', refresh_token);

    api.defaults.headers.Authorization = `Bearer ${token}`;
    setUser(userData);
    history.push('/initial');
  }

  async function signOut() {
    localStorage.removeItem('@DarkSpider:token');
    localStorage.removeItem('@DarkSpider:refresh_token');
    setUser({} as User);
  }

  return (
    <AuthContext.Provider value={{ signIn, signOut, isAuthenticated, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
