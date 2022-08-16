import axios from 'axios';
import { CONFIG } from '@/config/config';
const instance = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
