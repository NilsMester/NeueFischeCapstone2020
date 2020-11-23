import React, {useContext} from 'react';

import RecordContext from "../../contexts/RecordContext";
import {useParams, useHistory } from 'react-router-dom';
import Header from "../../commons/Header";
import Record from "../../commons/Record";
import RecordActionButton from "../../commons/RecordActionButton";

export default function SingleRecordPage(){
    const{records, editRecord, deleteRecord} = useContext(RecordContext);

    const {id} = useParams();
    const history = useHistory();

    const record = records.find((record) => record.id === id);
    return !record ? null : (
        <>
            <Header titel={record.titel}/>
            <Record record={record} actions={getActions()}/>
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