import React from 'react'
import styled from 'styled-components/macro';
import UserTagList from "../tags/UserTagList";
import CopyLinkToClipboard from "../CopyLinkToClipboard";
import OpenLink from "../OpenLink";
import TimeAgo from "react-timeago/lib";

export default function UserRecordItem({record, actions = [], className}) {

    return (
        <SingleRecordStyled className={className}>
<>
            <TitelStyled>{record.titel}</TitelStyled>

            </>
            <Actions>

                <div>{actions}</div>
                <OpenLink recordLink={record.recordLink}/>
                <CopyLinkToClipboard recordLink={record.recordLink} />
                <CreationDate><TimeAgo date={record.timestamp}/></CreationDate>
            </Actions>
            <UserTagList tags={record.tagList}/>
            <PlaceholderDiv/>
        </SingleRecordStyled>
    )

}

const PlaceholderDiv = styled.div`
height: 0;
width: 60%;
margin: 0 10px 0 0;
box-shadow: 0 0 3px 3px var(--grey-25);
`

const SingleRecordStyled = styled.section`
display: grid;
grid-template-rows: 3 (1fr);
justify-items: center;
row-gap: 22px;
`;

const Actions = styled.section`
display: grid;
grid-template-rows: min-content min-content;
grid-template-columns: 0.33fr 0.33fr 0.33fr;
grid-template-areas: 
"details visit copy"
"creationTimer creationTimer creationTimer";
column-gap: 28px;
padding: 10px 0 0 0;
`

const TitelStyled = styled.h2`
font-family: 'Orbitron', sans-serif;
font-size: 1.2em;
max-width: 95vw;
margin: 0;
padding: 0;
color: var(--grey-50);
text-align: center;
`
const CreationDate = styled.p`
justify-self: right;
grid-area: creationTimer;
font-size: 0.65em;
text-align: right;
margin: 0;
`