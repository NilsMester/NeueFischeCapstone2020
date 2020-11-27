import React, {useContext} from 'react';

import RecordContext from "../../contexts/RecordContext";
import {useParams, useHistory } from 'react-router-dom';
import Header from "../../components/Header";
import UserRecordItem from "../../components/records/UserRecordItem";
import RecordActionButton from "../../components/UI/RecordActionButton";

export default function SingleRecordPage(){
    const{records, deleteRecord} = useContext(RecordContext);

    const {id} = useParams();
    const history = useHistory();

    const record = records.find((record) => record.id === id);
    return !record ? null : (
        <>
            <Header titel="Your UserRecordItem"/>
            <UserRecordItem record={record} actions={getActions()}/>
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