import { create } from 'apisauce';

const api = create({
  baseURL: 'http://hungvu.net',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Cache: 'no-cache',
  },
  // withCredentials: true,
  timeout: 60000,
});



export function login(params) {
  return api.post('/login', params);
}
// export function getChanel(params) { return api.get('/channels.list', params); }
