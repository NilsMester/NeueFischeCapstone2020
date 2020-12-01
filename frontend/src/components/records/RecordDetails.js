import React from 'react'
import styled from 'styled-components/macro';
import UserTagList from "../tags/UserTagList";
import CopyLinkToClipboard from "../CopyLinkToClipboard";

export default function Record({record, actions = [], className}) {

    return (
        <SingleRecordStyled className={className}>

            <TitelStyled>{record.titel}</TitelStyled>
            <UserTagList tags={record.tagList}/>
            <TextStyled>{record.description}</TextStyled>
            <ActionSection>
                <div>{actions}</div>
                <CopyLinkToClipboard recordLink={record.recordLink} />
            </ActionSection>
        </SingleRecordStyled>
    )

}

const SingleRecordStyled = styled.section`
display: grid;
grid-template-rows: 5 (1fr);
row-gap: 8px;
`;

const ActionSection = styled.section`
display: grid;
grid-template-columns: 0.5fr 0.5fr;
height: 35px;
justify-items: center;
align-items: start;
`

const TitelStyled = styled.h2`
margin: 0;
color: var(--grey-main);
text-align: center;
`

const TextStyled = styled.p`
margin: 0;
color: var(--grey-50);
`

