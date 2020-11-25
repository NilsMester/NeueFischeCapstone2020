import React, {createContext, useContext, useReducer, useState} from 'react';
import RecordForm from "../../commons/RecordForm";
import RecordContext from "../../contexts/RecordContext";
import { useHistory } from 'react-router-dom';
import Header from "../../commons/Header";

export const RecordFormDataContext = createContext({});

const initialState = {
    titel:"",
    recordLink: '',
    tagsList: [],
    description: '',
    publicStatus: true,
}

function reducer(state, {field,value}){
    return {...state, [field]:value}
}

export default function AddRecordPage() {
    const{createRecord} = useContext(RecordContext)

    const [recordData, setRecordData] = useReducer(reducer, initialState);

    const history = useHistory();

    return(
        <>
            <RecordFormDataContext.Provider value={{recordData, setRecordData}}>
                <Header titel="New Record"/>
                <RecordForm onSave={handleSave} onChange={handleChange} onAddTagKlick={handleTagKlick}/>
            </RecordFormDataContext.Provider>
        </>
    )

    function handleSave(recordData) {
        const{titel, recordLink, description, publicStatus, tagsList} = recordData;
        createRecord(titel, recordLink, description, publicStatus, tagsList);
        history.push('/');
    }

    function handleChange(recordData) {
        setRecordData(recordData);
    }

    function handleTagKlick(recordData) {
        setRecordData(recordData);
    }

}