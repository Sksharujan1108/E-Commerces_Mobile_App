import { BASE_URL } from '../../../ENV';
import { requests } from './api';

// Post Register
export function registerRequestAuthenticateService(registerAuthRequestBody) {
  return requests.post(`${BASE_URL}/register`, registerAuthRequestBody);
}

// Post Login
export function loginRequestAuthenticateService(loginAuthRequestBody) {
  return requests.post(`${BASE_URL}/login`, loginAuthRequestBody);
}
