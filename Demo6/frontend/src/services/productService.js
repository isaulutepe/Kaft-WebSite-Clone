import axios from 'axios';

const API_URL = 'http://localhost:3001/api/products';

const getProducts = () => {
    return axios.get(`${API_URL}/products`);
};

export default {
    getProducts
};
