import axios from 'axios';

const header = (token) => ({
    headers: {
        Authorization: `Bearer ${token}`,
    },
});

export const getUserRecordList = (token) =>
    axios
        .get('/api/records', header(token))
        .then((response) => response.data);

export const addRecord = (titel, recordLink, description, publicStatus, tagList, token) =>
    axios
.post('/api/records', {titel, recordLink, description, publicStatus, tagList}, header(token))
.then((response) => response.data);

export const removeRecord = (id, token) =>
    axios
        .delete('/api/records' + id, header(token));

export const updateRecord = (id, titel, recordLink, description, timestamp, publicStatus, tagList, token) =>
    axios
        .put('/api/records', {id, titel, recordLink, description, timestamp, publicStatus, tagList}, header(token))
        .then((response) => response.data);