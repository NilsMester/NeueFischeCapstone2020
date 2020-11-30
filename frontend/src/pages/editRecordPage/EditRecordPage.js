import React, {useContext, useState} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import RecordContext from "../../contexts/RecordContext";
import RecordForm from "../../components/recordForm/RecordForm";
import Header from "../../components/Header";
import TabBar from "../../components/UI/TabBar";
import styled from 'styled-components/macro';
import SideBarActions from "../../components/tags/AddNewTagInput";

export default function EditIdeaPage() {
    const {editRecord, records} = useContext(RecordContext);
    const history = useHistory();
    const {id} = useParams();
    const record = records.find((record) => record.id === id);
    const [recordData, setRecordData] = useState(record);

    return !record ? null : (
<>
    <Header titel="Edit UserRecordItem"/>
    <MainGridStyled>
        <RecordForm onSave={handleSave} recordData={recordData} setRecordData={setRecordData}/>
        <SideBarActions recordData={recordData} setRecordData={setRecordData}/>
    </MainGridStyled>
    <TabBar/>
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