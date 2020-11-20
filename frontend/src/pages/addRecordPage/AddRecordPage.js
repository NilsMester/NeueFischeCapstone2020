import React, {useContext} from 'react';
import RecordForm from "../../commons/RecordForm";
import RecordContext from "../../contexts/RecordContext";
import { useHistory } from 'react-router-dom';

export default function AddRecordPage() {
    const{createRecord} = useContext(RecordContext)
    const history = useHistory();

    return(
        <RecordForm onSave={handleSave}/>
    )

    function handleSave(record) {
        const{titel, recordLink, tagsList, description, publicStatus} = record;
        createRecord(titel, recordLink, tagsList, description, publicStatus);
        history.push('/');

    }

}