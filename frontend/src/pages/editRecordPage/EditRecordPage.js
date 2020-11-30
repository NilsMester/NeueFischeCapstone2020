import React, {useContext, useState} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import RecordContext from "../../contexts/RecordContext";
import RecordForm from "../../components/recordForm/RecordForm";
import Header from "../../components/Header";
import TabBar from "../../components/UI/TabBar";
import styled from 'styled-components/macro';
import TagsContext from "../../contexts/TagsContext";
import UserTagList from "../../components/tags/UserTagList";
import AddNewTagInput from "../../components/tags/AddNewTagInput";

export default function EditIdeaPage() {
    const {editRecord, records} = useContext(RecordContext);
    const {userTagList} = useContext(TagsContext);
    const history = useHistory();
    const {id} = useParams();
    const record = records.find((record) => record.id === id);
    const [recordData, setRecordData] = useState(record);
    console.log(recordData)

    const filteredUserTagList = userTagList.filter(tag=>!recordData.tagList.includes(tag._id)).map(tagItem=>tagItem._id)


    return !record ? null : (
<>
    <Header titel="Edit UserRecordItem"/>
    <MainGridStyled>
        <RecordForm onSave={handleSave} recordData={recordData} setRecordData={setRecordData}/>

        <SidebarStyled>
            <UserTagList tags={filteredUserTagList} onTagClick={(tag)=> setRecordData({...recordData, tagList: [...recordData.tagList, tag]})}/>
            <AddNewTagInput recordData={recordData} setRecordData={setRecordData}/>
        </SidebarStyled>

    </MainGridStyled>
    <TabBar/>
</>
    );

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
const SidebarStyled = styled.div`
display: grid;
position: relative;
align-self: center;
justify-content: end;
row-gap: 50px;
`

