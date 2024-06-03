import axios from 'axios';

const API_URL = 'http://localhost:3001/api/users';

const getUsers = () => {
    return axios.get(`${API_URL}/users`);
};

export default {
    getUsers
};
