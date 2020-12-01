import React, {useContext, useMemo, useState} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import RecordContext from "../../contexts/RecordContext";
import RecordForm from "../../components/recordForm/RecordForm";
import Header from "../../components/Header";
import TabBar from "../../components/UI/TabBar";
import styled from 'styled-components/macro';
import TagsContext from "../../contexts/TagsContext";
import SideBar from "../../components/SideBar";

export default function EditIdeaPage() {
    const {editRecord, records} = useContext(RecordContext);
    const {userTagList} = useContext(TagsContext);
    const history = useHistory();
    const {id} = useParams();
    const record = records.find((record) => record.id === id);
    const [recordData, setRecordData] = useState(record);

    const [searchTerm, setSearchTerm] = useState("");

    const filteredUserTagList = useMemo(() => {
        if (!searchTerm) return userTagList.filter(tag => !recordData.tagList.includes(tag._id)).map(tagItem => tagItem._id);

        return userTagList.filter(tag=>!recordData.tagList.includes(tag._id)).map(tagItem=>tagItem._id).filter((tag) => {
            return (
                tag.toLowerCase().includes(searchTerm.toLowerCase())
            );
        });
    }, [searchTerm, userTagList, recordData.tagList]);

    return !record ? null : (
<>
    <Header titel="Edit UserRecordItem"/>
    <MainGridStyled>
        <RecordForm onSave={handleSave} recordData={recordData} setRecordData={setRecordData}/>
        <SideBar sidebar tags={filteredUserTagList} onTagClick={onTagClick} searchTerm={searchTerm} setSearchTerm={setSearchTerm} recordData={recordData} setRecordData={setRecordData}/>
    </MainGridStyled>
    <TabBar/>
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
}

const MainGridStyled = styled.div`
display: grid;
grid-template-columns: 1fr 0.5fr;
`