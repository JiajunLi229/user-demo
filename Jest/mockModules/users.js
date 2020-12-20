import axios from 'axios';

export const getUsers = async () => {
    const { data } = await axios.get('/api/users');
    return data;
};

export const getUserData = async (id) => {
    const { data } = await axios.get(`/api/user/${id}`);
    return data;
};