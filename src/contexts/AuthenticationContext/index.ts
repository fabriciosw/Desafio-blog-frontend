import { createContext, Dispatch, SetStateAction, useContext } from 'react';

export interface IAuth {
  isAuthenticated: boolean;
  permission?: 'none' | 'admin';
}

type authenticationProps = {
  authentication: IAuth;
  setAuthentication: Dispatch<SetStateAction<IAuth>>;
};

export const Authentication = createContext<authenticationProps>({} as authenticationProps);

export const AuthenticationContext = (): authenticationProps => useContext(Authentication);
