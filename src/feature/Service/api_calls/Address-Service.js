import { BASE_URL } from '../../../ENV';
import { requests } from './api';

// Post Addresses
export function addressRequestService(addressRequestBody) {
  return requests.post(`${BASE_URL}/addresses`, addressRequestBody);
}