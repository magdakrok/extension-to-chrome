import axios from 'axios';

const instance = axios.create({
    baseUrl: 'https://cookbook-addec.firebaseio.com/'

});

export default instance;