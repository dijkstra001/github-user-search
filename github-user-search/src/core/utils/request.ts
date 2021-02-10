import axios, { Method } from 'axios';

type RequestParams = {
    method?: Method;
    url: string;
}

const BASE_URL = 'https://api.github.com/users/';

export const makeRequest = ({ method = 'GET', url }: RequestParams) => {
    return axios({
        method,
        url: `${BASE_URL}${url}`,
    });
};