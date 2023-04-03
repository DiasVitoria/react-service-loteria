import axios from 'axios'
const api = axios.create({
    baseURL: 'https://viacep.com.br/ws',
    headers: {
        'Content-Type': 'application/json'
    }
})

export default api;