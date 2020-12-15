import React from 'react';
import styled from 'styled-components/macro';
import TagList from '../tags/TagList';
import CopyLinkToClipboard from '../UI/CopyLinkToClipboard';
import OpenLink from '../UI/OpenLink';
import { ReactTinyLink } from 'react-tiny-link';
import TimeAgo from 'react-timeago/lib';

export default function Record({ record }) {
    return (
        <>
            <Titel>{record.titel}</Titel>

            <TagsSection>
                <TagsSubTitel>Tags</TagsSubTitel>
                <TagList formTags tags={record.tagList} />
            </TagsSection>
            <Description>{record.description}</Description>
            <Preview>
                <ReactTinyLink
                    cardSize="small"
                    showGraphic={true}
                    maxLine={2}
                    minLine={2}
                    url={record.recordLink}
                />
                <CreationDate>
                    <p>
                        <TimeAgo date={record.timestamp} />
                    </p>
                </CreationDate>
            </Preview>
            <Interactions>
                <OpenLink recordLink={record.recordLink} />
                <CopyLinkToClipboard recordLink={record.recordLink} />
            </Interactions>
        </>
    );
}

const Interactions = styled.section`
    display: grid;
    grid-template-columns: 0.5fr 0.5fr;
    height: 35px;
    justify-content: center;
    align-items: center;
    grid-area: interactions;
`;

const Titel = styled.h2`
    font-family: 'Orbitron', sans-serif;
    margin: 0;
    height: 40px;
    color: var(--grey-50);
    text-align: center;
    object-fit: scale-down;
    font-size: 1.25em;
    grid-area: titel;
`;

const Description = styled.p`
    margin: 0;
    color: var(--grey-50);
`;

const TagsSection = styled.section`
    grid-area: tags;
    height: 26vh;
`;

const TagsSubTitel = styled.p`
    margin: 0;
`;

const Preview = styled.section`
    display: grid;
    text-align: center;
    grid-area: preview;
    margin: 0 10px 0 0;
`;
const CreationDate = styled.aside`
    justify-self: right;
    p {
        font-size: var(--size-m);
        justify-self: right;
        text-align: right;
    }
`;
