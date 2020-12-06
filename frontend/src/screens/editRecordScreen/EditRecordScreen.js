import React, {useContext, useState} from 'react';
import {useHistory,useParams} from 'react-router-dom';
import RecordContext from "../../contexts/RecordContext";
import RecordForm from "../../components/recordForm/RecordForm";
import Header from "../../components/Header";
import TabBar from "../../components/UI/TabBar";
import styled from 'styled-components/macro';
import TagsContext from "../../contexts/TagsContext";
import SideBarForm from "../../components/recordForm/SideBarForm";
import {SearchFilterTagList} from "../../components/services/SearchFilterTagList";

export default function EditIdeaPage() {
    const {editRecord, records} = useContext(RecordContext);
    const {userTagList} = useContext(TagsContext);
    const history = useHistory();
    const {id} = useParams();
    const record = records.find((record) => record.id === id);
    const [recordData, setRecordData] = useState(record);
    const [searchTerm, setSearchTerm] = useState("");

    const filteredUserTagList = SearchFilterTagList({searchTerm, userTagList, recordData});

    return !record ? null : (
<>
    <Header titel="Edit your Record"/>
    <MainGridStyled>
        <FormStyled onSubmit={handleSubmit}>
            <RecordForm onSave={handleSave} recordData={recordData} setRecordData={setRecordData}/>
        </FormStyled>
        <SideBarForm sidebar tags={filteredUserTagList} onTagClick={onTagClick} searchTerm={searchTerm} setSearchTerm={setSearchTerm} recordData={recordData} setRecordData={setRecordData}/>
    </MainGridStyled>
    <TabBar onSave={handleSave} recordData={recordData}/>
</>
    );

    function onTagClick(tag) {
        setRecordData({...recordData, tagList: [...recordData.tagList, tag]});
        setSearchTerm("")
    }

    function handleSave(record) {
        const {id, titel, recordLink, description, timestamp, publicStaus, tagList} = record;
        editRecord(id, titel, recordLink, description, timestamp, publicStaus, tagList);
        history.goBack();
    }

    function handleSubmit(event) {
        event.preventDefault();
        handleSave(recordData);
    }

}

const FormStyled = styled.form`
    display: grid;
    grid-template-rows: min-content 1fr min-content  min-content 0.5fr min-content ;
    grid-row-gap: 12px;
`;

const MainGridStyled = styled.div`
display: grid;
grid-template-columns: 1fr min-content;
padding: 10px 0 10px 10px;
`