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
import searchFilterTagsRecordList from "../../components/services/searchFilterTagsRecordList";
import SearchIcon from "../../components/SearchIcon";

export default function UserRecordListScreen () {
    const {records} = useContext(RecordContext);
    const {userTagList} = useContext(TagsContext);
    const [searchTermText, setSearchTermText] = useState("");
    const [searchTermTagsArray, setSearchTermTagsArray] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [showFirstSidebarArea, setShowFirstSidebarArea] = useState(false)
    const [showSecondSideBarArea, setShowSecondSideBarArea] = useState(false)

    const filteredUserTagList = searchFilterTagsRecordList(searchTerm, userTagList);

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
                                 <SideBarActionButton firstSticky  showFirstSidebarArea={showFirstSidebarArea} showSecondSideBarArea={showSecondSideBarArea} key="firstListButtonSticky"
                                                      onClick={handleClickFirstButton}>
                                     <SearchIcon tagssearch={"tagssearch"} />Tags
                                 </SideBarActionButton>]}
                             actionsSecondButton={[
                                 <SideBarActionButton secondSticky showFirstSidebarArea={showFirstSidebarArea} showSecondSideBarArea={showSecondSideBarArea}  key="secondListButtonSticky"
                                                      onClick={handleClickSecondButton}>
                                     <SearchIcon/>Text
                                 </SideBarActionButton>]}
                             actionsSecondButtonInGrid={[
                                 <SideBarActionButton key="secondListButtonInGrid" onClick={handleClickSecondButton}>
                                     <SearchIcon/>Text
                                 </SideBarActionButton>]}
                             actionsSecondArea={[<AddNewTagInput key="actionSecondListArea" recordData={searchTermText}
                                                                 setRecordData={setSearchTermText}/>]}
                             placeHolder={[<PlaceHolder key="placeholder"/>]}
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

const PlaceHolder = styled.div `
height: 64px;
`

const MainGridStyled = styled.div`
display: flex ;
grid-template-columns: 1fr min-content;
grid-template-rows: 40px 40px 106px 30px 78px auto;
grid-template-areas: 
"recordsList placeholder"
"recordsList button1"
"recordsList tagsListbar"
"recordsList ."
"recordsList addTagField"
"recordsList .";
;
row-gap: 24px;
position: relative;
padding: 10px 0 10px 10px;
overflow: scroll;
`


