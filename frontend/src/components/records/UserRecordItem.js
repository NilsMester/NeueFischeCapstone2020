import React from 'react'
import styled from 'styled-components/macro';
import UserTagList from "../tags/UserTagList";
import CopyLinkToClipboard from "../CopyLinkToClipboard";
import OpenLink from "../OpenLink";

export default function UserRecordItem({record, actions = [], className}) {

    return (
        <SingleRecordStyled className={className}>

            <TitelStyled>{record.titel}</TitelStyled>
            <UserTagList tags={record.tagList}/>
            <ActionSection>
                <OpenLink recordLink={record.recordLink}/>
                <div>{actions}</div>
                <CopyLinkToClipboard recordLink={record.recordLink} />
            </ActionSection>
        </SingleRecordStyled>
    )

}

const SingleRecordStyled = styled.section`
display: grid;
grid-template-rows: 5 (1fr);
row-gap: 16px;
`;

const ActionSection = styled.section`
display: grid;
grid-template-columns: 0.5fr 0.5fr 0.5fr;
justify-items: center;

align-items: center;
`

const TitelStyled = styled.h2`
font-size: 1.1em;
margin: 0;
color: var(--white1);;
text-align: center;
`
