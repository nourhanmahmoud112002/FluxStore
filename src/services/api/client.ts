import axios from 'axios';
import { ENDPOINTS } from '../../constants/endpoints';

const client = axios.create({
  baseURL: ENDPOINTS.BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    // Authorization: '',
  },
  timeout: 60000,
});
export default client;
