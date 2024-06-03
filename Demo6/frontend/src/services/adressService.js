import axios from 'axios';

const API_URL = 'http://localhost:3001/api/adresses';

const getAdresses = () => {
    return axios.get(`${API_URL}/adresses`);
};

export default {
    getAdresses
};
