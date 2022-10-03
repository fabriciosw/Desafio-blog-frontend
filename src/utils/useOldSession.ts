import jwtDecode from 'jwt-decode';
import { IAuth } from '../contexts/AuthenticationContext';
import getTokenStorage from './getTokenStorage';

const OldSession = (setAuthentication: React.Dispatch<React.SetStateAction<IAuth>>): void => {
  const token = getTokenStorage();

  if (!token) return;

  const decoded: JWTPayload = jwtDecode(token);

  if (decoded.exp > Date.now().valueOf() / 1000 + 10 * 60) {
    setAuthentication({ isAuthenticated: true, permission: decoded.auth });
  }
};

export default OldSession;

interface JWTPayload {
  auth: 'none' | 'admin';
  exp: EpochTimeStamp;
  iat: EpochTimeStamp;
  sub: string;
}
