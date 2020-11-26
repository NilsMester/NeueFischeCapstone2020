import React, {useContext, useState} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import RecordContext from "../../contexts/RecordContext";
import RecordForm from "../../commons/RecordForm";
import Header from "../../commons/Header";
import {RecordFormDataContext} from "../addRecordPage/AddRecordPage";

export default function EditIdeaPage() {
    const {editRecord, records} = useContext(RecordContext);
    const history = useHistory();
    const {id} = useParams();
    const record = records.find((record) => record.id === id);

    const [recordData, setRecordData] = useState(record);
    const [recordTagsList, setRecordTagsList] = useState("");

    return !record ? null : (

        <RecordFormDataContext.Provider value={{recordData, setRecordData, recordTagsList, setRecordTagsList}}>
            <Header titel="Edit Record"/>
            <RecordForm onSave={handleSave}/>
        </RecordFormDataContext.Provider>

    );

    function handleSave(record) {
        const {id, titel, recordLink, description, timestamp, publicStaus, tagsList} = record;
        editRecord(id, titel, recordLink, description, timestamp, publicStaus, tagsList);
        history.goBack();
    }

    function handleTagKlickButton() {
        setRecordData({...recordData, tagsList: [...recordData.tagsList, recordTagsList]});
        setRecordTagsList("");
    }


}