import React, {useContext, useEffect, useState} from "react";
import UserContext from "./UserContext";
import {addRecord, getUserRecordsList, removeRecord, updateRecord} from "../service/RecordService";
import RecordContext from "./RecordContext";
import {getUserTags} from "../service/TagsAggregationService";


export default function RecordContextProvider({children}) {

    const [records,setRecords] = useState([]);
    const [userTagsList,setUserTagsList] = useState([]);
    const {token, tokenIsValid} = useContext(UserContext);

    useEffect(() => {
        tokenIsValid() && getUserRecordsList(token)
            .then(setRecords)
            .catch(console.log);
    }, [token, tokenIsValid]);

    useEffect(() => {
        tokenIsValid() && getUserTags(token)
            .then(setUserTagsList)
            .catch(console.log);
    }, [token, tokenIsValid]);

    const createRecord = (titel, recordLink, description, publicStatus, tagsList) =>
        addRecord(titel, recordLink, description, publicStatus, tagsList, token)
            .then((newRecord) => setRecords([...records, newRecord]))
            .catch(console.log);

    const deleteRecord = (id) =>
        removeRecord(id, token)
            .then(() => setRecords(records.filter((record) => record.id !== id)))
            .catch(console.log);

    const editRecord = (id, titel, recordLink, description, timestamp, publicStatus, tagsList) =>{
        updateRecord(id, titel, recordLink, description, timestamp, publicStatus, tagsList, token)
            .then((updatedRecord) => setRecords([...records.filter((record) => record.id !== updatedRecord.id), updatedRecord]))
            .catch(console.log)
    }

    return (
        <RecordContext.Provider value={{records, userTagsList, createRecord, deleteRecord, editRecord}}>
            {children}
        </RecordContext.Provider>
    )
}