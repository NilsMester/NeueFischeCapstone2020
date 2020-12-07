import React, {useContext, useState} from 'react'
import Header from "../../components/Header";
import TabBar from "../../components/UI/TabBar";
import UserRecordList from "../../components/records/UserRecordList";
import styled from 'styled-components/macro';
import RecordContext from "../../contexts/RecordContext";
import TagsContext from "../../contexts/TagsContext";
import SideBarForm from "../../components/recordForm/SideBarForm";
import SideBarActionButton from "../../components/UI/SideBarActionButton";
import AddNewTagInput from "../../components/tags/AddNewTagInput";
import {SearchFilterTagsRecordList} from "../../components/services/SearchFilterTagsRecordList";

export default function UserRecordListScreen () {
    const {records} = useContext(RecordContext);
    const {userTagList} = useContext(TagsContext);
    const [searchTermText, setSearchTermText] = useState("");
    const [searchTermTagsArray, setSearchTermTagsArray] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [showFirstSidebarArea, setShowFirstSidebarArea] = useState(true)
    const [showSecondSideBarArea, setShowSecondSideBarArea] = useState(false)

    const filteredUserTagList = SearchFilterTagsRecordList({searchTerm, userTagList});

    return(
        <>
            <Header titel="Your Records"/>
            <MainGridStyled>

                <UserRecordList records={records}/>
                <SideBarForm sidebar
                             tags={filteredUserTagList}
                             searchTerm={searchTerm}
                             setSearchTerm={setSearchTerm}
                             showFirstSidebarArea={showFirstSidebarArea}
                             showSecondSideBarArea={showSecondSideBarArea}
                             actionsFirstButton={[
                                 <SideBarActionButton firstSticky key="firstListButtonSticky"
                                                      onClick={handleClickFirstButton}>
                                     Tags search
                                 </SideBarActionButton>]}
                             actionsSecondButton={[
                                 <SideBarActionButton secondSticky key="secondListButtonSticky"
                                                      onClick={handleClickSecondButton}>
                                     Text search
                                 </SideBarActionButton>]}
                             actionsSecondButtonInGrid={[
                                 <SideBarActionButton key="secondListButtonInGrid" onClick={handleClickSecondButton}>
                                     Text search
                                 </SideBarActionButton>]}
                             actionsSecondArea={[<AddNewTagInput key="actionSecondListArea" recordData={searchTermText}
                                                                 setRecordData={setSearchTermText}/>]}
                />

            </MainGridStyled>


            <TabBar recordsView/>
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


}


const MainGridStyled = styled.div`
display: flex ;
grid-template-columns: 1fr min-content;
grid-template-rows: min-content min-content;
grid-template-areas: 
"recordsList recordsList"
"recordsList button"
"recordsList userTagsList"
"recordsList button"
"recordsList search"
"recordsList recordsList"
;
row-gap: 24px;
position: relative;
padding: 10px 0 10px 10px;
overflow: scroll;
`


