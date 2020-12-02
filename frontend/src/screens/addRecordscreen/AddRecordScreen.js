import React, {useContext, useState} from 'react';
import RecordForm from "../../components/recordForm/RecordForm";
import RecordContext from "../../contexts/RecordContext";
import { useHistory } from 'react-router-dom';
import Header from "../../components/Header";
import styled from 'styled-components/macro';
import TabBar from "../../components/UI/TabBar";
import TagsContext from "../../contexts/TagsContext";
import SideBarForm from "../../components/recordForm/SideBarForm";
import {SearchFilterTagList} from "../../components/services/SearchFilterTagList";

const initialState = {
    titel:"",
    recordLink: '',
    tagList: [],
    description: '',
    publicStatus: true,
}

export default function AddRecordScreen() {
    const {createRecord} = useContext(RecordContext)
    const [recordData, setRecordData] = useState(initialState);
    const history = useHistory();
    const {userTagList} = useContext(TagsContext);
    const [searchTerm, setSearchTerm] = useState("");

    const filteredUserTagList = SearchFilterTagList({searchTerm, userTagList, recordData});

    return(
        <>

            <Header titel="New Record"/>
            <MainGridStyled>
                <RecordForm onSave={handleSave} recordData={recordData} setRecordData={setRecordData} />
                <SideBarForm sidebar tags={filteredUserTagList} onTagClick={onTagClick} searchTerm={searchTerm} setSearchTerm={setSearchTerm} recordData={recordData} setRecordData={setRecordData}/>
            </MainGridStyled>
            <TabBar/>
        </>
    );

    function onTagClick(tag) {
        setRecordData({...recordData, tagList: [...recordData.tagList, tag]});
        setSearchTerm("")
    }

    function handleSave(recordData) {
        const{titel, recordLink, description, publicStatus, tagList} = recordData;
        createRecord(titel, recordLink, description, publicStatus, tagList);
        history.push('/');
    }

}

const MainGridStyled = styled.div`
display: grid;
grid-template-columns: 1fr min-content;
position: relative;
`


