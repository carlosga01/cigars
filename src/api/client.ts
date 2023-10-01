import axios, {CreateAxiosDefaults} from 'axios';
import Auth from '/api/auth';
import Cigars from '/api/cigars';

export const request = axios.create({
  baseURL: 'https://cigars-api.onrender.com',
} as CreateAxiosDefaults);

export const authClient = new Auth(request);
export const cigarsClient = new Cigars(request);

export default {
  auth: authClient,
  cigars: cigarsClient,
};
