import axios from 'axios';

export const getData = (url) => {
    if(!url) {
        throw new Error('No url specified');
    }

    return axios.get(url);
};