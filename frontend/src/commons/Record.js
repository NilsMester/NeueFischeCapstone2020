import React from 'react'
import styled from 'styled-components/macro';
import RecordTagsList from "./RecordTagsList";

export default function Record({record, actions = [], className}) {
    return (
        <SingleRecordStyled className={className}>

            <TitelStyled>{record.titel}</TitelStyled>
            <TextStyled>{record.recordLink}</TextStyled>
            <RecordTagsList recordTagsList={record.tagsList}/>
            <TextStyled>{record.description}</TextStyled>
            <div>{actions}</div>


        </SingleRecordStyled>

    )

}

const SingleRecordStyled = styled.section`
display: grid;

grid-template-rows: 5 (1fr);
row-gap: 6px;
`;

const TitelStyled = styled.h2`
margin: 0;
color: var(--grey-main);
`
const TextStyled = styled.p`
margin: 0;
color: var(--grey-50);

`

