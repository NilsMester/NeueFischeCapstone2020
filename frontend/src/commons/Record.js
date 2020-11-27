import React, {useState} from 'react'
import styled from 'styled-components/macro';
import RecordTagsList from "./RecordTagsList";
import {FaLink} from "react-icons/fa";

export default function Record({record, actions = [], className}) {
    const [copySuccess, setCopySuccess] = useState('');
    return (
        <SingleRecordStyled className={className}>

            <TitelStyled>{record.titel}</TitelStyled>
            <RecordTagsList recordTagsList={record.tagsList}/>
            <TextStyled>{record.description}</TextStyled>
            <ActionSection>
                <div>{actions}</div>
                <CopyLinkStyled>
                    <CopyLinkIconStyled onClick={copyToClipBoard}/>
                    {copySuccess}
                </CopyLinkStyled>
            </ActionSection>
        </SingleRecordStyled>

    )

    function copyToClipBoard(e) {
        const textArea = document.createElement("textarea")
        textArea.value = record.recordLink
        document.body.appendChild(textArea);
        document.execCommand('copy');
        e.target.focus();
        textArea.select();
        setCopySuccess('Copied!');

        try {
            const successful = document.execCommand('copy');
            const msg = successful ? 'successful!' : 'unsuccessful!';
            setCopySuccess(msg);}
        catch (err){
            setCopySuccess('Opps, unable to copy');}

        document.queryCommandSupported('copy')
        document.body.removeChild(textArea);
    }

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

const CopyLinkStyled = styled.div` 
display: grid;
grid-template-rows: min-content min-content;
justify-items: center;
align-items: center;
text-align: center;
color: var(--grey-50);
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
const CopyLinkIconStyled = styled(FaLink)`
color: var(--secondary1);
height: 30px;
width: 30px;
`
