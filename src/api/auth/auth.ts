import {AxiosInstance} from 'axios';
import {LoginOrSignUpPayload} from '/api/auth/request.types';

class Auth {
  request: AxiosInstance;

  constructor(request: AxiosInstance) {
    this.request = request;
  }

  loginOrSignUp = (payload: LoginOrSignUpPayload) =>
    this.request.post<void>('/login', payload).then(res => res.data);
}

export default Auth;
