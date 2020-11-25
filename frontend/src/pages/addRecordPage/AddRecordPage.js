import React, {createContext, useContext, useState} from 'react';
import RecordForm from "../../commons/RecordForm";
import RecordContext from "../../contexts/RecordContext";
import { useHistory } from 'react-router-dom';
import Header from "../../commons/Header";
import SideBarActions from "../../commons/SideBarActions";
import styled from 'styled-components/macro';

export const RecordFormDataContext = createContext({});

const initialState = {
    titel:"",
    recordLink: '',
    tagsList: [],
    description: '',
    publicStatus: true,
}

export default function AddRecordPage() {
    const{createRecord} = useContext(RecordContext)

    const [recordData, setRecordData] = useState(initialState);

    const history = useHistory();

    return(
        <>
            <RecordFormDataContext.Provider value={{recordData, setRecordData}}>
                <Header titel="New Record"/>
                <DivStyled>
                    <RecordForm onSave={handleSave} onChange={handleChange} onAddTagKlick={handleTagKlick}/>
                    <SideBarActions/>
                </DivStyled>
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

const DivStyled = styled.div`
display: grid;
grid-template-columns: 1fr 0.5fr;
`