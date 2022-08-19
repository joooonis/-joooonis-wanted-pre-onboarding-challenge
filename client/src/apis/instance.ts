import axios from 'axios';
import { CONFIG } from '@config';
const instance = axios.create({
  baseURL: CONFIG.API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
