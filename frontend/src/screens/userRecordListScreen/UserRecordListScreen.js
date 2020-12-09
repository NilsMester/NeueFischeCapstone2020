import React, {useContext, useEffect, useState} from 'react'
import Header from "../../components/Header";
import TabBar from "../../components/UI/TabBar";
import UserRecordList from "../../components/records/UserRecordList";
import styled from 'styled-components/macro';
import RecordContext from "../../contexts/RecordContext";
import TagsContext from "../../contexts/TagsContext";
import SideBar from "../../components/SideBar";
import SideBarActionButton from "../../components/UI/SideBarActionButton";
import searchFilterTagsRecordList from "../../components/services/searchFilterTagsRecordList";
import SearchIcon from "../../components/SearchIcon";
import SearchRecordInput from "../../components/SearchRecordInput";
import searchFilterRecordList from "../../components/records/searchFilterRecordList";

export default function UserRecordListScreen () {
    const {records} = useContext(RecordContext);
    const {userTagList} = useContext(TagsContext);
    const [searchTermText, setSearchTermText] = useState("");
    const [searchTermTagsArray, setSearchTermTagsArray] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [showFirstSidebarArea, setShowFirstSidebarArea] = useState(false)
    const [showSecondSideBarArea, setShowSecondSideBarArea] = useState(false)
    const [filterIsActive, setFilterIsActive] = useState(false)

    const filteredUserTagList = searchFilterTagsRecordList(searchTerm, userTagList);

    const filteredRecordList = searchFilterRecordList(searchTermText, records, searchTermTagsArray)

    useEffect(()=> {
        if(searchTermText !== "" || searchTermTagsArray.length > 0){
            setFilterIsActive(true)
        }else if( searchTermText === "" && searchTermTagsArray.length === 0){
            setFilterIsActive(false)
        }
    }, [setFilterIsActive, searchTermText, searchTermTagsArray])

    return(
        <>
            <Header titel="Your Records"/>

            <MainGridStyled>
                <UserRecordList records={filteredRecordList}/>
                <SideBar sidebar
                         tags={filteredUserTagList}
                         searchTermTagsArray={searchTermTagsArray}
                         onTagClick={onTagClick}
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
                         actionsSecondArea={[<SearchRecordInput key="actionSecondListArea" searchTermText={searchTermText}
                                                                    setSearchTermText={setSearchTermText}/>]}
                         placeHolder={[<PlaceHolder key="placeholder"/>]}
                />
            </MainGridStyled>

            <TabBar recordsView={"recordsView"} filterisactive={filterIsActive} onClickDeleteFilter={onClickDeleteFilter} />
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
        if(searchTermTagsArray.includes(tag)){
            setSearchTermTagsArray(searchTermTagsArray.filter((searchTag) => searchTag !== tag))
        }else {
        setSearchTermTagsArray([...searchTermTagsArray, tag]);}
        setSearchTerm("")
    }

    function onClickDeleteFilter(){
        setSearchTermText("")
        setSearchTermTagsArray([])
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


