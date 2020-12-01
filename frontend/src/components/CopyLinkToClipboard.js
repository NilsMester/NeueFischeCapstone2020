import React, {useState} from 'react'
import styled from 'styled-components/macro';
import {FaLink} from "react-icons/fa";


export default function CopyLinkToClipboard(record) {
    const [copySuccess, setCopySuccess] = useState('');

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
            const msg = successful ? 'successful!' : 'unsuccessful!';
            setCopySuccess(msg);
        } catch (err) {
            setCopySuccess('Opps, unable to copy');
        }

        document.queryCommandSupported('copy')
        document.body.removeChild(textArea);
    }

    return (<CopyLinkStyled>
            <CopyLinkIconStyled onClick={copyToClipBoard}/>
            {copySuccess}
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

    const CopyLinkIconStyled = styled(FaLink)`
color: var(--secondary1);
height: 30px;
width: 30px;
`