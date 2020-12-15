import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import RecordContext from '../../contexts/RecordContext';
import RecordForm from '../../components/commons/RecordForm';
import Header from '../../components/commons/Header';
import TabBar from '../../components/commons/TabBar';
import styled from 'styled-components/macro';
import TagsContext from '../../contexts/TagsContext';
import SideBar from '../../components/commons/SideBar';

import SideBarActionButton from '../../components/UI/SideBarActionButton';
import AddNewTagInput from '../../components/tags/AddNewTagInput';
import searchFilterTagList from '../../components/services/searchFilterTagList';

export default function EditIdeaPage() {
    const { editRecord, records } = useContext(RecordContext);
    const { userTagList } = useContext(TagsContext);
    const history = useHistory();
    const { id } = useParams();
    const record = records.find((record) => record.id === id);
    const [recordData, setRecordData] = useState(record);
    const [searchTerm, setSearchTerm] = useState('');
    const [showFirstSidebarArea, setShowFirstSidebarArea] = useState(false);
    const [showSecondSideBarArea, setShowSecondSideBarArea] = useState(false);

    const filteredUserTagList = searchFilterTagList(
        searchTerm,
        userTagList,
        recordData
    );

    useEffect(() => {
        setRecordData(record);
    }, [record]);

    if (!recordData) {
        return 'loading';
    }

    const formCouldBeSaved =
        recordData?.titel &&
        recordData?.recordLink &&
        recordData?.tagList?.length;

    return !record ? null : (
        <>
            <Header titel="Edit your Record" showLogout={true} />
            <MainGrid>
                <RecordForm
                    onSubmit={handleSave}
                    recordData={recordData}
                    setRecordData={setRecordData}
                />
                <SideBar
                    sidebar
                    tags={filteredUserTagList}
                    onTagClick={onTagClick}
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    showFirstSidebarArea={showFirstSidebarArea}
                    showSecondSideBarArea={showSecondSideBarArea}
                    actionsFirstButton={[
                        <SideBarActionButton
                            first
                            key="firstButtonAbsolut"
                            onClick={handleClickFirstButton}
                        >
                            Tags
                        </SideBarActionButton>,
                    ]}
                    actionsSecondButton={[
                        <SideBarActionButton
                            second
                            key="secondButtonAbsolut"
                            onClick={handleClickSecondButton}
                        >
                            New Tag
                        </SideBarActionButton>,
                    ]}
                    actionsSecondButtonInGrid={[
                        <SideBarActionButton
                            secondInGrid
                            key="secondButtonInGrid"
                            onClick={handleClickSecondButton}
                        >
                            New Tag
                        </SideBarActionButton>,
                    ]}
                    actionsSecondArea={[
                        <AddNewTagInput
                            key="actionSecondArea"
                            recordData={recordData}
                            setRecordData={setRecordData}
                        />,
                    ]}
                />
            </MainGrid>
            <TabBar
                tabbarswitch={'form'}
                tabbarcolumns={'twoButton'}
                buttonisactive={formCouldBeSaved}
                onSave={handleSave}
                recordData={recordData}
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
        setRecordData({ ...recordData, tagList: [...recordData.tagList, tag] });
        setSearchTerm('');
    }

    function handleSave(recordData) {
        const {
            id,
            titel,
            recordLink,
            description,
            timestamp,
            publicStaus,
            tagList,
        } = recordData;
        editRecord(
            id,
            titel,
            recordLink,
            description,
            timestamp,
            publicStaus,
            tagList
        );
        history.goBack();
    }
}

const MainGrid = styled.main`
    display: grid;
    grid-template-columns: 1fr min-content;
    grid-template-rows: 40px 40px 106px 30px 78px auto;
    grid-template-areas:
        'link .'
        'tags button1'
        'tags tagsListbar'
        'titel .'
        'description addTagField'
        'preview preview';
    row-gap: 24px;
    position: relative;
    padding: 10px 0 10px 10px;
`;
