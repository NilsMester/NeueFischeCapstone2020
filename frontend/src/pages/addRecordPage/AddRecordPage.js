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
    const [recordTagsList, setRecordTagsList] = useState("");

    const history = useHistory();

    return(
        <>
            <RecordFormDataContext.Provider value={{recordData, setRecordData, recordTagsList, setRecordTagsList, handleTagKlickButton}}>
                <BodyGrid>
                    <Header titel="New Record"/>
                    <MainGridStyled>
                        <RecordForm onSave={handleSave}/>
                        <SideBarActions/>
                    </MainGridStyled>
                </BodyGrid>
            </RecordFormDataContext.Provider>
        </>
    )

    function handleSave(recordData) {
        const{titel, recordLink, description, publicStatus, tagsList} = recordData;
        createRecord(titel, recordLink, description, publicStatus, tagsList);
        history.push('/');
    }

    function handleTagKlickButton() {
        setRecordData({...recordData, tagsList: [...recordData.tagsList, recordTagsList]});
        setRecordTagsList("");
    }

}
const BodyGrid = styled.div`
display: grid;
grid-template-rows: min-content 1fr;
height: 100vh;
`

const MainGridStyled = styled.div`
display: grid;
grid-template-columns: 1fr;
`