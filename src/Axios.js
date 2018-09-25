import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burgerbuilder-6e369.firebaseio.com/'
});


export default instance;