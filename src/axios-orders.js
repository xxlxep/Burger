import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-e0156.firebaseio.com/'
});

export default instance;