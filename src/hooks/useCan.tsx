import { useContext } from 'react';
import { AuthContext } from './auth';
import { validateUserPermissions } from '../utils/validateUserPermissions';

type UseCanParams = {
  permissions?: string[];
  roles?: string[];
};

export function useCan({ permissions, roles }: UseCanParams) {
  const { user, isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated) {
    return false;
  }

  if (!user) {
    return false;
  }

  if (Object.keys(user).length === 0) {
    return false;
  }

  const userHasValidPermissions = validateUserPermissions({
    user,
    permissions,
    roles,
  });

  return userHasValidPermissions;
}
