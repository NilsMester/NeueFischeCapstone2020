import axios from 'axios';

const header = (token) => ({
    headers: {
        Authorization: `Bearer ${token}`,
    },

});

export const getUserRecordsList = (token) =>
    axios
        .get('api/records', header(token))
        .then((response) => response.data)

export const addRecord = (titel, recordLink, tagsList, description, publicStaus, token) =>
    axios
.post('/api/records', {titel, recordLink, description, publicStaus, tagsList}, header(token))
.then((response) => response.data)