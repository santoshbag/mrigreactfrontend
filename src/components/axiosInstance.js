import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:8000', // Django backend URL
  withCredentials: true,           // Allow cookies in requests
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
