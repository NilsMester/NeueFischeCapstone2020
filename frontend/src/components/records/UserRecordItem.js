import React from 'react'
import styled from 'styled-components/macro';
import UserTagList from "../tags/UserTagList";
import CopyLinkToClipboard from "../CopyLinkToClipboard";
import OpenLink from "../OpenLink";

export default function UserRecordItem({record, actions = [], className}) {

    return (
        <SingleRecordStyled className={className}>

            <TitelStyled>{record.titel}</TitelStyled>
            <Actions>
                <div>{actions}</div>
                <OpenLink recordLink={record.recordLink}/>
                <CopyLinkToClipboard recordLink={record.recordLink} />
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
row-gap: 24px;
`;

const Actions = styled.section`
display: grid;
grid-template-columns: 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr;
justify-items: center;
align-items: center;
column-gap: 40px;
`

const TitelStyled = styled.h2`
font-family: 'Orbitron', sans-serif;
font-size: 1.25em;
margin: 0;
padding: 0 10px 0 0;
color: var(--grey-50);
text-align: center;
`
