import React, {useContext, useState} from 'react';
import RecordForm from "../../components/recordForm/RecordForm";
import RecordContext from "../../contexts/RecordContext";
import { useHistory } from 'react-router-dom';
import Header from "../../components/Header";
import styled from 'styled-components/macro';
import TabBar from "../../components/UI/TabBar";
import AddNewTagInput from "../../components/tags/AddNewTagInput";
import UserTagList from "../../components/tags/UserTagList";
import TagsContext from "../../contexts/TagsContext";

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

    const filteredUserTagList = userTagList.filter(tag=>!recordData.tagList.includes(tag._id)).map(tagItem=>tagItem._id)

    return(
        <>
            <Header titel="New UserRecordItem"/>
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

    function handleSave(recordData) {
        const{titel, recordLink, description, publicStatus, tagList} = recordData;
        createRecord(titel, recordLink, description, publicStatus, tagList);
        history.push('/');
    }

}

const SidebarStyled = styled.div`
display: grid;
position: relative;
align-self: center;
justify-content: end;
row-gap: 50px;
`

const MainGridStyled = styled.div`
display: grid;
grid-template-columns: 1fr 0.5fr;
`