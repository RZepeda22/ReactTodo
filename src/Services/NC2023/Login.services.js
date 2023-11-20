import axios from 'axios';
const BASE_URL = "https://localhost:8080";

export const useServices = {
    login: async (identifier,token,password) => {

        //console.log({ username, password });
        const response = axios.post(`${BASE_URL}/auth/login`, {
            identifier:identifier,
            token:token,
            password: password
        })
            .then(response => {
                return response.data;
            })
            .catch(error => {
                console.log(error);
                return {};
            });
        return response;
    },

    verifyToken: async (token) => {
        const response = axios.get(`${BASE_URL}/auth/whoami`, {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then(response => {
                return response.data;
            })
            .catch(error => {
                console.log(error);
                return {};
            });
        return response;
    },

    register: async (username, email, password) => {

        //console.log({ username, password });
        const response = axios.post(`${BASE_URL}/auth/register`, {
            username: username,
            email: email,
            password: password
        })
            .then(response => {
                return response.data;
            })
            .catch(error => {
                console.log(error);
                return {};
            });
        return response;
    },
};