import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import IUser from '../interfaces/IUser';
import { api } from '../services/api';

interface UsersProviderProps {
  children: ReactNode;
}

interface UsersContextData {
  users: IUser[];
}
const UsersContext = createContext<UsersContextData>({} as UsersContextData);

export function UsersProvider({ children }: UsersProviderProps) {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    api
      .get<IUser[]>('/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <UsersContext.Provider value={{ users }}>{children}</UsersContext.Provider>
  );
}

export function useUsers() {
  const context = useContext(UsersContext);

  return context;
}
