import axios from 'axios';

const api = axios.create({
    baseURL: 'https://60301927a1e9d20017af17bc.mockapi.io/api'
})

export default api;