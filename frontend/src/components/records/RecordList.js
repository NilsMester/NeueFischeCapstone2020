import React from 'react';
import styled from 'styled-components/macro';
import DetailsIcon from '../UI/DetailsIcon';
import RecordListItem from './RecordListItem';

export default function RecordList({ records, timeago, ...rest }) {
    return (
        <>
            {records.length === 0 ? (
                <NoResearchResult>
                    <Titel>No search results found!</Titel>
                </NoResearchResult>
            ) : (
                <RecordListStyled {...rest}>
                    {records?.map((record) => (
                        <li key={record.id}>
                            <RecordListItem
                                timeago={timeago}
                                record={record}
                                actions={[
                                    <DetailsIcon
                                        key="details"
                                        record={record}
                                    />,
                                ]}
                            />
                        </li>
                    ))}
                </RecordListStyled>
            )}
        </>
    );
}

const RecordListStyled = styled.ul`
    padding: 0 10px 0 0;
    overflow: scroll;
    list-style: none;
    width: ${(props) => (props.home ? `66vw` : `100vw`)};
    display: grid;
    grid-area: recordsList;
    row-gap: 30px;
    grid-auto-rows: min-content;
    margin: 0;
    -ms-overflow-style: none;
    ::-webkit-scrollbar {
        display: none;
    }
`;

const Titel = styled.h2`
    font-size: 1.5em;
    margin: 0;
    padding: 0 10px 0 0;
    color: var(--grey-50);
    text-align: center;
`;

const NoResearchResult = styled.div`
    width: 100vw;
    height: 60vh;
    display: grid;
    grid-area: recordsList;
    align-items: center;
`;
