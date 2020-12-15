import React from 'react';
import styled from 'styled-components/macro';
import TagList from '../tags/TagList';
import CopyLinkToClipboard from '../UI/CopyLinkToClipboard';
import OpenLink from '../UI/OpenLink';
import TimeAgo from 'react-timeago/lib';

export default function RecordListItem({ record, actions = [], className }) {
    return (
        <ListItem className={className}>
            <>
                <Titel>{record.titel}</Titel>
            </>
            <Interactions>
                <div>{actions}</div>
                <OpenLink recordLink={record.recordLink} />
                <CopyLinkToClipboard recordLink={record.recordLink} />
                <CreationDate>
                    <TimeAgo date={record.timestamp} />
                </CreationDate>
            </Interactions>
            <TagList tags={record.tagList} />
            <Placeholder />
        </ListItem>
    );
}

const Placeholder = styled.div`
    height: 0;
    width: 60%;
    margin: 0 10px 0 0;
    box-shadow: 0 0 3px 3px var(--grey-25);
`;

const ListItem = styled.section`
    display: grid;
    grid-template-rows: 3 (1fr);
    justify-items: center;
    row-gap: 22px;
`;

const Interactions = styled.section`
    display: grid;
    grid-template-rows: min-content min-content;
    grid-template-columns: 0.33fr 0.33fr 0.33fr;
    grid-template-areas:
        'details visit copy'
        'creationTimer creationTimer creationTimer';
    column-gap: 28px;
    padding: 10px 0 0 0;
`;

const Titel = styled.h2`
    font-family: 'Orbitron', sans-serif;
    font-size: 1.2em;
    max-width: 95vw;
    margin: 0;
    padding: 0;
    color: var(--grey-50);
    text-align: center;
`;
const CreationDate = styled.p`
    justify-self: right;
    grid-area: creationTimer;
    font-size: 0.65em;
    text-align: right;
    margin: 0;
`;
