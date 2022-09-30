import jwt_decode from 'jwt-decode';
import HttpClient from './httpClient';

export default class SessionsService {
  static async loginUser(
    email: string,
    password: string
    // setAuthentication: (x: boolean) => void
  ): Promise<void> {
    await HttpClient.api
      .post('/session', {
        email,
        password,
      })
      .then((response) => {
        const { token } = response.data;

        const decoded = jwt_decode(token);

        return decoded;

        // const authorization = decoded.auth;

        // if (authorization === 'true') setIsAdmin(true);

        // localStorage.setItem('TOKEN_KEY', token);
        // setAuthentication(true);
        // HttpClient.api.defaults.headers.common.Authorization = getTokenStorage();
      });
  }

  static logoutUser(): void {
    localStorage.removeItem('TOKEN_KEY');
    document.location.reload();
  }
}
