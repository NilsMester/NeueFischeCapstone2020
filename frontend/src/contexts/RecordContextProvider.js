import React, {useContext, useEffect, useState} from "react";
import UserContext from "./UserContext";
import {addRecord, getUserRecordsList} from "../service/RecordService";
import RecordContext from "./RecordContext";


export default function RecordContextProvider({children}) {

    const [records,setRecords] = useState([]);
    const {token, tokenIsValid} = useContext(UserContext);

    useEffect(() => {
        tokenIsValid() && getUserRecordsList(token)
            .then(setRecords)
            .catch(console.log);
    }, [token, tokenIsValid]);

    const createRecord = (recordLink, tagsList, description, publicStaus) =>
        addRecord(recordLink, tagsList, description, publicStaus, token)
            .then((newRecord) => setRecords([...records, newRecord]))
            .catch(console.log);

    return (
        <RecordContext.Provider value={{records, createRecord}}>
            {children}
        </RecordContext.Provider>
    )
}