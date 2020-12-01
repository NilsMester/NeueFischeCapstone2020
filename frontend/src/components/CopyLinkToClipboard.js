import React, {useState} from 'react'
import styled from 'styled-components/macro';
import {HiOutlineClipboardCopy} from "react-icons/hi";


export default function CopyLinkToClipboard(record) {
    const [copySuccess, setCopySuccess] = useState('Copy Link');

    function copyToClipBoard(event) {
        const textArea = document.createElement("textarea")
        textArea.value = record.recordLink
        document.body.appendChild(textArea);
        document.execCommand('copy');
        event.target.focus();
        textArea.select();
        setCopySuccess('Copied!');

        try {
            const successful = document.execCommand('copy');
            const msg = successful ? 'Successful!' : 'Unsuccessful!';
            setCopySuccess(msg);
        } catch (err) {
            setCopySuccess('Opps, unable to copy');
        }

        document.queryCommandSupported('copy')
        document.body.removeChild(textArea);
    }

    return (<CopyLinkStyled>
            <CopyLinkIconStyled onClick={copyToClipBoard}/>
            <DescriptionStyled>{copySuccess}</DescriptionStyled>
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

    const CopyLinkIconStyled = styled(HiOutlineClipboardCopy)`
color: var(--secondary1);
height: 30px;
width: 30px;
`
const DescriptionStyled = styled.p`
font-size: 0.6em;
`