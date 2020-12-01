import React, {useContext} from 'react';
import RecordContext from "../../contexts/RecordContext";
import {useParams, useHistory } from 'react-router-dom';
import Header from "../../components/Header";
import RecordActionButton from "../../components/UI/RecordActionButton";
import RecordDetails from "../../components/records/RecordDetails";

export default function DetailsRecordScreen(){
    const{records, deleteRecord} = useContext(RecordContext);

    const {id} = useParams();
    const history = useHistory();

    const record = records.find((record) => record.id === id);
    return !record ? null : (
        <>
            <Header titel="Your Record"/>
            <RecordDetails record={record} actions={getActions()}/>
        </>
);

    function getActions() {
        return [
            <RecordActionButton key="delete" onClick={handleDelete}>
                Delete
            </RecordActionButton>,
            <RecordActionButton
                key="edit"
                onClick={() => history.push(`/edit/${record.id}`)}
            >
                Edit
            </RecordActionButton>,
        ];
    }

    function handleDelete() {
        deleteRecord(id);
        history.goBack();
    }

}