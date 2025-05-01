import axios from 'axios';

localStorage.config({
  name: 'myBlogApp',
  storeName: 'keyValueStore',
});

const api = axios.create({
  baseURL: 'https://liaplusai-backend-3.onrender.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(async (config) => {
  const token =  localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;