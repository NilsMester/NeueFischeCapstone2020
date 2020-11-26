import React from 'react'
import styled from 'styled-components/macro';
import RecordTagsList from "./RecordTagsList";

export default function Record({record, actions = [], className}) {
    return (
        <SingleRecordStyled className={className}>
            <div>
            <TitelStyled>{record.titel}</TitelStyled>
            <TextStyled>{record.recordLink}</TextStyled>
            <TextStyled>{record.description}</TextStyled>
            <div>{actions}</div>
            </div>
            <RecordTagsList recordTagsList={record.tagsList}/>
        </SingleRecordStyled>

    )

}

const SingleRecordStyled = styled.section`
display: grid;
grid-template-columns: 0.75fr 0.25fr;
grid-template-rows: 4 (1fr);
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

