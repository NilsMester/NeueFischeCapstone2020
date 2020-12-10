import React, {useContext, useEffect, useState} from 'react';
import RecordForm from "../../components/recordForm/RecordForm";
import RecordContext from "../../contexts/RecordContext";
import {useHistory} from 'react-router-dom';
import Header from "../../components/Header";
import styled from 'styled-components/macro';
import TabBar from "../../components/UI/TabBar";
import TagsContext from "../../contexts/TagsContext";
import SideBar from "../../components/SideBar";
import SideBarActionButton from "../../components/UI/SideBarActionButton";
import AddNewTagInput from "../../components/tags/AddNewTagInput";
import searchFilterTagList from "../../components/services/searchFilterTagList";

const initialState = {
    titel:"",
    recordLink: '',
    tagList: [],
    description: '',
    publicStatus: true,
}

export default function AddRecordScreen() {
    const {createRecord} = useContext(RecordContext)
    const {userTagList} = useContext(TagsContext);
    const [recordData, setRecordData] = useState(initialState);
    const history = useHistory();
    const [searchTerm, setSearchTerm] = useState("");
    const [showFirstSidebarArea, setShowFirstSidebarArea] = useState(false)
    const [showSecondSideBarArea, setShowSecondSideBarArea] = useState(false)
    const [formCouldBeSaved, setFormCouldBeSaved] = useState(false)

    const filteredUserTagList = searchFilterTagList(searchTerm, userTagList, recordData);

    useEffect(()=> {
        if(recordData.titel !== "" && recordData.recordLink !== "" && recordData.tagList.length > 0){
            setFormCouldBeSaved(true)
        }else if(recordData.titel === "" || recordData.recordLink === "" || recordData.tagList.length === 0){
            setFormCouldBeSaved(false)
        }
    }, [formCouldBeSaved, setFormCouldBeSaved, recordData.titel,recordData.recordLink, recordData.tagList])


    return(
        <>
            <Header titel="New Record"/>
            <MainGridStyled>

                <RecordForm onSubmit={handleSave} recordData={recordData} setRecordData={setRecordData}/>
                <SideBar sidebar
                         tags={filteredUserTagList}
                         onTagClick={onTagClick}
                         searchTerm={searchTerm}
                         setSearchTerm={setSearchTerm}
                         showFirstSidebarArea={showFirstSidebarArea}
                         showSecondSideBarArea={showSecondSideBarArea}
                         actionsFirstButton={[
                                 <SideBarActionButton first key="firstButtonAbsolut" onClick={handleClickFirstButton}>
                                     Tags
                                 </SideBarActionButton>]}
                         actionsSecondButton={[
                                 <SideBarActionButton second key="secondButtonAbsolut"
                                                      onClick={handleClickSecondButton}>
                                     New Tag
                                 </SideBarActionButton>]}
                         actionsSecondButtonInGrid={[
                                 <SideBarActionButton secondInGrid key="secondButtonInGrid" onClick={handleClickSecondButton}>
                                     New Tag
                                 </SideBarActionButton>]}
                         actionsSecondArea={[<AddNewTagInput key="actionSecondArea" recordData={recordData}
                                                                 setRecordData={setRecordData}/>]}
                />
            </MainGridStyled>
            <TabBar tabbarswitch={"form"} tabbarcolumns={"twoButton"} buttonisactive={formCouldBeSaved} onSave={handleSave} recordData={recordData}/>
        </>
    );

    function handleClickFirstButton(){
        setShowFirstSidebarArea(!showFirstSidebarArea)
        setShowSecondSideBarArea(false)
    }

    function handleClickSecondButton(){
        setShowFirstSidebarArea(false)
        setShowSecondSideBarArea(!showSecondSideBarArea)
    }

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
grid-template-rows: 40px 40px 106px 30px 78px auto;
grid-template-areas: 
"link ."
"tags button1"
"tags tagsListbar"
"titel ."
"description addTagField"
"preview preview";
row-gap: 24px;
position: relative;
padding: 10px 0 10px 10px;
`



