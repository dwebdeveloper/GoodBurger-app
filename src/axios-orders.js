import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://good-burger-app-default-rtdb.firebaseio.com/'
});

export default instance;
