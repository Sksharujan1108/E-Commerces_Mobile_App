import { BASE_URL } from '../../../ENV';
import { requests } from './api';

export function registerRequestAuthenticateService(registerAuthRequestBody) {
  return requests.post(`${BASE_URL}/register`, registerAuthRequestBody);
}
