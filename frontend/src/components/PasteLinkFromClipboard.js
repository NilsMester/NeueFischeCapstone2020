import React, {useState} from 'react'
import styled from 'styled-components/macro';
import {BiPaste} from "react-icons/bi";

export default function PasteLinkFromClipboard({recordData, setRecordData}) {

    const [pasteSuccess, setPasteSuccess] = useState('Paste Link');

   async function pasteLinkUrlFromClipboardToForm() {

        try {
            const text = await navigator.clipboard.readText();
            const msg = 'Successful!';
            setPasteSuccess(msg)
            setRecordData({...recordData, recordLink: (recordData.recordLink, "")});
            setRecordData({...recordData, recordLink: (recordData.recordLink, text)});
            console.log('Pasted content: ', text);
        } catch
            (err) {
            console.error('Failed to read clipboard contents: ', err);
            setPasteSuccess('Opps, unable to paste');
        }
    }

    return (
        <CopyLinkStyled>
            <CopyLinkIconStyled onClick={pasteLinkUrlFromClipboardToForm}/>
            <DescriptionStyled>{pasteSuccess}</DescriptionStyled>
        </CopyLinkStyled>
    )

}

const CopyLinkStyled = styled.div` 
display: grid;
grid-template-rows: min-content min-content;
justify-items: center;
align-items: center;
text-align: center;
color: var(--grey-50);
`

    const CopyLinkIconStyled = styled(BiPaste)`
color: var(--secondary1);
height: 30px;
width: 30px;
`
const DescriptionStyled = styled.p`
font-size: 0.6em;
`