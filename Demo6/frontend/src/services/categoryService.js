import axios from 'axios';

const API_URL = 'http://localhost:3001/api/categories';

const getCategories = () => {
    return axios.get(`${API_URL}/categories`);
};

export default {
    getCategories
};
