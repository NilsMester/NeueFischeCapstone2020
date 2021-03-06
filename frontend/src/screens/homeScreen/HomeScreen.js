import React, { useContext } from 'react';
import Header from '../../components/commons/Header';
import styled from 'styled-components/macro';
import RecordContext from '../../contexts/RecordContext';
import TagsContext from '../../contexts/TagsContext';
import TabBar from '../../components/commons/TabBar';
import TagList from '../../components/tags/TagList';
import getRecentRecords from '../../components/services/getRecentRecords';
import getMostUsedTags from '../../components/services/getMostUsedTags';
import RecordList from '../../components/records/RecordList';

export default function HomeScreen() {
    const { records } = useContext(RecordContext);
    const { userTagList } = useContext(TagsContext);

    const resentTags = getMostUsedTags(userTagList);
    const recentRecords = getRecentRecords(records);

    return (
        <>
            <Header titel="Your TabLog" showLogout={true} />
            <MainGridStyled>
                <Heading tags>Most used Tags</Heading>
                <TagList tags={resentTags} />
                <Heading>Recently added Records</Heading>
                <RecentRecords>
                    <RecordList timeago={true} records={recentRecords} />
                </RecentRecords>
            </MainGridStyled>
            <TabBar tabbarswitch={'home'} tabbarcolumns={'twoButton'} />
        </>
    );
}

const MainGridStyled = styled.div`
    display: grid;
    grid-template-rows: min-content min-content;
    align-items: center;
    justify-items: center;
    row-gap: 30px;
    position: relative;
    padding: 10px 10px 10px 0;
    overflow: scroll;
    -ms-overflow-style: none;
    ::-webkit-scrollbar {
        display: none;
    }
`;

const RecentRecords = styled.section`
    text-align: center;
`;

const Heading = styled.h3`
    font-size: 1.4em;
    color: ${(props) =>
        props.tags ? `var(--orange-75)` : `var(--secondary1)`};
    margin: 0;
`;
