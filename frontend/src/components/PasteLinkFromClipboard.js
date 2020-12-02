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
        } catch
            (err) {
            setPasteSuccess('Opps, unable to paste');
        }
    }

    return (
        <PasteLinkStyled>
            <PasteLinkIconStyled onClick={pasteLinkUrlFromClipboardToForm}/>
            <DescriptionStyled>{pasteSuccess}</DescriptionStyled>
        </PasteLinkStyled>
    )

}

const PasteLinkStyled = styled.div` 
display: grid;
grid-template-rows: min-content min-content;
align-content: end;
justify-content: center;
justify-items: center;
color: var(--grey-50);
`

const PasteLinkIconStyled = styled(BiPaste)`
color: var(--secondary1);
height: 30px;
width: 30px;
`
const DescriptionStyled = styled.p`
font-size: 0.6em;
margin: 0;
`