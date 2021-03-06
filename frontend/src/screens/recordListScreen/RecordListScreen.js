import React, { useContext, useEffect, useState } from 'react';
import Header from '../../components/commons/Header';
import TabBar from '../../components/commons/TabBar';
import RecordList from '../../components/records/RecordList';
import styled from 'styled-components/macro';
import RecordContext from '../../contexts/RecordContext';
import TagsContext from '../../contexts/TagsContext';
import SideBar from '../../components/commons/SideBar';
import SideBarActionButton from '../../components/UI/SideBarActionButton';
import searchFilterTagsRecordList from '../../components/services/searchFilterTagsRecordList';
import SearchIcon from '../../components/UI/SearchIcon';
import SearchRecordInput from '../../components/commons/SearchRecordInput';
import searchFilterRecordList from '../../components/services/searchFilterRecordList';
import { getUserTags } from '../../service/TagsAggregationService';
import UserContext from '../../contexts/UserContext';

export default function RecordListScreen() {
    const { records } = useContext(RecordContext);
    const { userTagList, setUserTagList } = useContext(TagsContext);
    const { token, tokenIsValid } = useContext(UserContext);
    const [searchTermText, setSearchTermText] = useState('');
    const [searchTermTagsArray, setSearchTermTagsArray] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [showFirstSidebarArea, setShowFirstSidebarArea] = useState(false);
    const [showSecondSideBarArea, setShowSecondSideBarArea] = useState(false);
    const [filterIsActive, setFilterIsActive] = useState(false);

    const filteredUserTagList = searchFilterTagsRecordList(
        searchTerm,
        userTagList
    );

    const filteredRecordList = searchFilterRecordList(
        searchTermText,
        records,
        searchTermTagsArray
    );

    useEffect(() => {
        tokenIsValid() &&
            getUserTags(token).then(setUserTagList).catch(console.log);
    }, [token, tokenIsValid, setUserTagList, records]);

    useEffect(() => {
        if (searchTermText !== '' || searchTermTagsArray.length > 0) {
            setFilterIsActive(true);
        } else if (searchTermText === '' && searchTermTagsArray.length === 0) {
            setFilterIsActive(false);
        }
    }, [setFilterIsActive, searchTermText, searchTermTagsArray]);

    return (
        <>
            <Header titel="Your Records" showLogout={true} />

            <MainGrid>
                <RecordList records={filteredRecordList} />
                <SideBar
                    sidebar
                    tags={filteredUserTagList}
                    searchTermTagsArray={searchTermTagsArray}
                    onTagClick={onTagClick}
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    showFirstSidebarArea={showFirstSidebarArea}
                    showSecondSideBarArea={showSecondSideBarArea}
                    actionsFirstButton={[
                        <SideBarActionButton
                            firstSticky
                            showFirstSidebarArea={showFirstSidebarArea}
                            showSecondSideBarArea={showSecondSideBarArea}
                            key="firstListButtonSticky"
                            onClick={handleClickFirstButton}
                        >
                            <SearchIcon tagssearch={'tagssearch'} />
                            Tags
                        </SideBarActionButton>,
                    ]}
                    actionsSecondButton={[
                        <SideBarActionButton
                            secondSticky
                            showFirstSidebarArea={showFirstSidebarArea}
                            showSecondSideBarArea={showSecondSideBarArea}
                            key="secondListButtonSticky"
                            onClick={handleClickSecondButton}
                        >
                            <SearchIcon />
                            Text
                        </SideBarActionButton>,
                    ]}
                    actionsSecondButtonInGrid={[
                        <SideBarActionButton
                            key="secondListButtonInGrid"
                            onClick={handleClickSecondButton}
                        >
                            <SearchIcon />
                            Text
                        </SideBarActionButton>,
                    ]}
                    actionsSecondArea={[
                        <SearchRecordInput
                            key="actionSecondListArea"
                            searchTermText={searchTermText}
                            setSearchTermText={setSearchTermText}
                        />,
                    ]}
                    placeHolder={[<PlaceHolder key="placeholder" />]}
                />
            </MainGrid>

            <TabBar
                tabbarswitch={'list'}
                buttonisactive={filterIsActive}
                onClickDeleteFilter={onClickDeleteFilter}
            />
        </>
    );

    function handleClickFirstButton() {
        setShowFirstSidebarArea(!showFirstSidebarArea);
        setShowSecondSideBarArea(false);
    }

    function handleClickSecondButton() {
        setShowFirstSidebarArea(false);
        setShowSecondSideBarArea(!showSecondSideBarArea);
    }

    function onTagClick(tag) {
        if (searchTermTagsArray.includes(tag)) {
            setSearchTermTagsArray(
                searchTermTagsArray.filter((searchTag) => searchTag !== tag)
            );
        } else {
            setSearchTermTagsArray([...searchTermTagsArray, tag]);
        }
        setSearchTerm('');
    }

    function onClickDeleteFilter() {
        setSearchTermText('');
        setSearchTermTagsArray([]);
    }
}

const PlaceHolder = styled.div`
    height: 64px;
`;

const MainGrid = styled.div`
    display: flex;
    grid-template-columns: min-content min-content;
    grid-template-rows: 40px 40px 106px 30px 78px auto;
    grid-template-areas:
        'recordsList placeholder'
        'recordsList button1'
        'recordsList tagsListbar'
        'recordsList .'
        'recordsList addTagField'
        'recordsList .';
    row-gap: 24px;
    padding: 10px 0 10px 10px;
    overflow: scroll;
`;
