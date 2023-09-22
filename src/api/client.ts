import axios, {CreateAxiosDefaults} from 'axios';
import Auth from '/api/auth';

export const request = axios.create({
  baseURL: 'https://cigars-api.onrender.com',
} as CreateAxiosDefaults);

export const authClient = new Auth(request);

export default {
  auth: authClient,
};
