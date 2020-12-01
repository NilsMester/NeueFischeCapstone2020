import React, {useState} from 'react'
import styled from 'styled-components/macro';
import {HiOutlineClipboardCopy} from "react-icons/hi";


export default function PasteLinkFromClipboard(record, setRecord) {
    const [pasteSuccess, setPasteSuccess] = useState('Paste Link');

    function pasteFromClipBoard(event) {

        const pasteTextarea = document.querySelector('.paste');

        navigator.clipboard.readText()
            .then((text) => {
                pasteTextarea.textContent = text;
                setPasteSuccess('Async readText successful, "' + text + '" written');

            })
            .catch((err) => setPasteSuccess('Async readText failed with error: "' + err + '"'));
        try {
            const successful = document.execCommand('paste');
            const msg = successful ? 'Successful!' : 'Unsuccessful!';
            setPasteSuccess(msg);
        } catch (err) {
            setPasteSuccess('Opps, unable to copy');
        }
    }

    return (
        <>
        <CopyLinkStyled type="radio" className="paste" value={pasteFromClipBoard}/>
            <CopyLinkIconStyled onClick={pasteFromClipBoard}/>
            <DescriptionStyled>{pasteSuccess}</DescriptionStyled>
        </>
    )

}

const CopyLinkStyled = styled.input` 
  visibility: hidden;
   height: 0;
  width: 0;
  opacity: 0;
`

    const CopyLinkIconStyled = styled(HiOutlineClipboardCopy)`
color: var(--secondary1);
height: 30px;
width: 30px;
`
const DescriptionStyled = styled.p`
font-size: 0.6em;
`