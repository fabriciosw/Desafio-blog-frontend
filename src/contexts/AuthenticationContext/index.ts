import { createContext, useContext } from 'react';

export interface Auth {
  isAuthenticated: boolean;
  permission?: 'none' | 'admin';
}

type Props = {
  authentication: Auth;
  setAuthentication: (x: Auth) => void;
};

export const Authentication = createContext<Props>({} as Props);

export const AuthenticationContext = (): Props => useContext(Authentication);
