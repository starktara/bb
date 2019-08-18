import axios from 'axios';

const instance = axios.create({
    baseURL: 'localhost:4200/'
});

export default instance;
