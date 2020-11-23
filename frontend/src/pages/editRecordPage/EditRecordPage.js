import React, { useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import RecordContext from "../../contexts/RecordContext";
import RecordForm from "../../commons/RecordForm";
import Header from "../../commons/Header";

export default function EditIdeaPage() {
    const {editRecord, records} = useContext(RecordContext);
    const history = useHistory();
    const {id} = useParams();
    const record = records.find((record) => record.id === id);

    return !record ? null : (
        <>
            <Header titel="Edit Record"/>
            <RecordForm onSave={handleSave} record={record}/>
        </>
    );

    function handleSave(record) {
        const {id, titel, recordLink, description, timestamp, publicStaus, tagsList} = record;
        editRecord(id, titel, recordLink, description, timestamp, publicStaus, tagsList);
        history.goBack();
    }
}