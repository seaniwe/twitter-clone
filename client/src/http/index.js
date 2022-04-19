import axios from 'axios'

const host = axios.create({
    baseURL: 'http://localhost:5000/ua/',
    withCredentials: true,
    headers: {
        accept: 'aplication/json',
    }
})

export default host