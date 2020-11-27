import React, {useContext, useState} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import RecordContext from "../../contexts/RecordContext";
import RecordForm from "../../commons/RecordForm";
import Header from "../../commons/Header";
import ActionBar from "../../commons/ActionBar";
import styled from 'styled-components/macro';
import SideBarActions from "../../commons/SideBarActions";

export default function EditIdeaPage() {
    const {editRecord, records} = useContext(RecordContext);
    const history = useHistory();
    const {id} = useParams();
    const record = records.find((record) => record.id === id);

    const [recordData, setRecordData] = useState(record);

    return !record ? null : (
<>
    <Header titel="Edit Record"/>
    <MainGridStyled>
        <RecordForm onSave={handleSave} recordData={recordData} setRecordData={setRecordData}/>
        <SideBarActions recordData={recordData} setRecordData={setRecordData}/>
    </MainGridStyled>
    <ActionBar/>
</>
    );

    function handleSave(record) {
        const {id, titel, recordLink, description, timestamp, publicStaus, tagsList} = record;
        editRecord(id, titel, recordLink, description, timestamp, publicStaus, tagsList);
        history.goBack();
    }

}

const MainGridStyled = styled.div`
display: grid;
grid-template-columns: 1fr 0.5fr;
`