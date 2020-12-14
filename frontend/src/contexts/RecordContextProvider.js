import React, { useContext, useEffect, useState } from 'react';
import UserContext from './UserContext';
import {
    addRecord,
    getUserRecordList,
    removeRecord,
    updateRecord,
} from '../service/RecordService';
import RecordContext from './RecordContext';

export default function RecordContextProvider({ children }) {
    const [records, setRecords] = useState([]);
    const { token, tokenIsValid } = useContext(UserContext);

    useEffect(() => {
        tokenIsValid() &&
            getUserRecordList(token).then(setRecords).catch(console.log);
    }, [token, tokenIsValid]);

    const createRecord = (
        titel,
        recordLink,
        description,
        publicStatus,
        tagList
    ) =>
        addRecord(titel, recordLink, description, publicStatus, tagList, token)
            .then((newRecord) => setRecords([...records, newRecord]))
            .catch(console.log);

    const deleteRecord = (id) =>
        removeRecord(id, token)
            .then(() =>
                setRecords(records.filter((record) => record.id !== id))
            )
            .catch(console.log);

    const editRecord = (
        id,
        titel,
        recordLink,
        description,
        timestamp,
        publicStatus,
        tagList
    ) => {
        updateRecord(
            id,
            titel,
            recordLink,
            description,
            timestamp,
            publicStatus,
            tagList,
            token
        )
            .then((updatedRecord) =>
                setRecords([
                    ...records.filter(
                        (record) => record.id !== updatedRecord.id
                    ),
                    updatedRecord,
                ])
            )
            .catch(console.log);
    };

    return (
        <RecordContext.Provider
            value={{ records, createRecord, deleteRecord, editRecord }}
        >
            {children}
        </RecordContext.Provider>
    );
}
