import React, {useContext, useState} from 'react';
import RecordForm from "../../components/recordForm/RecordForm";
import RecordContext from "../../contexts/RecordContext";
import { useHistory } from 'react-router-dom';
import Header from "../../components/Header";
import styled from 'styled-components/macro';
import TabBar from "../../components/UI/TabBar";
import AddNewTagInput from "../../components/tags/AddNewTagInput";

const initialState = {
    titel:"",
    recordLink: '',
    tagsList: [],
    description: '',
    publicStatus: true,
}

export default function AddRecordPage() {
    const {createRecord} = useContext(RecordContext)
    const [recordData, setRecordData] = useState(initialState);
    const history = useHistory();

    return(
        <>
            <Header titel="New UserRecordItem"/>
            <MainGridStyled>
                <RecordForm onSave={handleSave} recordData={recordData} setRecordData={setRecordData}/>
                <AddNewTagInput recordData={recordData} setRecordData={setRecordData}/>
            </MainGridStyled>
            <TabBar/>
        </>
    );

    function handleSave(recordData) {
        const{titel, recordLink, description, publicStatus, tagsList} = recordData;
        createRecord(titel, recordLink, description, publicStatus, tagsList);
        history.push('/');
    }

}

const MainGridStyled = styled.div`
display: grid;
grid-template-columns: 1fr 0.5fr;
`