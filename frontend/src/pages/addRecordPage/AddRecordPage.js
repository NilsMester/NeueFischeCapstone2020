import React, {useContext, useState} from 'react';
import RecordForm from "../../commons/RecordForm";
import RecordContext from "../../contexts/RecordContext";
import { useHistory } from 'react-router-dom';
import Header from "../../commons/Header";

export default function AddRecordPage() {
    const{createRecord} = useContext(RecordContext)

    const [recordData, setRecordData] = useState();
    const [recordTags, setRecordTags] = useState();

    const history = useHistory();

    return(
        <>
            <Header titel="New Record"/>
            <RecordForm recordOnChange={recordData} onSave={handleSave} onChange={handleChange} onAddTagKlick={handleTagKlick}/>
        </>
    )

    function handleSave(record) {
        const{titel, recordLink, description, publicStatus, tagsList} = record;
        createRecord(titel, recordLink, description, publicStatus, tagsList);
        history.push('/');
    }

    function handleChange(record) {
        setRecordData(record);
    }

    function handleTagKlick(record) {
        setRecordData(record);
    }

}