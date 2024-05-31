import axios from 'axios';

// Crear una instancia de Axios con una base URL predefinida
const axiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:5000', // La URL base de tu servidor API
});

// Interceptar las solicitudes para agregar encabezados de autorización si hay un token en el almacenamiento local
axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
        config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
});

export default axiosInstance;
