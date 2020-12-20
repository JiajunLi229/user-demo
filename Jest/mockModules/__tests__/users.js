import axios from 'axios';
import { getUsers, getUserData } from '../users';

jest.mock('axios');

const axiosGet = axios.get;

beforeEach(() => {
    axiosGet.mockReset();
});

describe('getUsers', () => {
    it('should call the API and return the data', async () => {
        const usersData = [
            { id: 51, name: 'Allan' },
            { id: 120, name: 'George' },
        ];

        axiosGet.mockResolvedValue({ data: usersData });
        // also could be mockImplementation
        // or anything that mock functions can do

        const returnedUsersData = await getUsers();

        expect(returnedUsersData).toEqual(usersData);
        // and because axios.get is a mock function, we can assert it too
        expect(axiosGet).toHaveBeenCalledTimes(1);
        expect(axiosGet).toHaveBeenCalledWith('/api/users');
    });
});

describe('getUserData', () => {
    it('should call the API and return the data', async () => {
        const userId = 51;
        const userData = { id: userId, name: 'Allan' };

        axiosGet.mockResolvedValue({ data: userData });

        const returnedUserData = await getUserData(userId);

        expect(returnedUserData).toEqual(userData);
        expect(axiosGet).toHaveBeenCalledTimes(1);
        expect(axiosGet).toHaveBeenCalledWith(`/api/user/${userId}`);
    });
});