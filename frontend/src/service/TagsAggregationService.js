import axios from 'axios';

const header = (token) => ({
    headers: {
        Authorization: `Bearer ${token}`,
    },

});

export const getUserTags = (token) =>
    axios
        .get('api/usertags', header(token))
        .then((response) => response.data)

