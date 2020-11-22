import React, {useContext, useEffect, useState} from "react";
import UserContext from "./UserContext";
import {addRecord, getUserRecordsList} from "../service/RecordService";
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

    const createRecord = (titel, recordLink, tagsList, description, publicStaus) =>
        addRecord(titel, recordLink, tagsList, description, publicStaus, token)
            .then((newRecord) => setRecords([...records, newRecord]))
            .catch(console.log);

    return (
        <RecordContext.Provider value={{records, userTagsList, createRecord}}>
            {children}
        </RecordContext.Provider>
    )
}