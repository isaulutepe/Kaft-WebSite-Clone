import axios from 'axios';

const API_URL = 'http://localhost:3001/api/users';

const getUsers = () => {
    return axios.get(`${API_URL}/users`);
};

const createUser = (user) => {
    return axios.post(`${API_URL}/users`, user);
};
export default {
    getUsers,
    createUser
};
