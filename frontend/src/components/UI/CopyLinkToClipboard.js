import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { HiOutlineClipboardCopy } from 'react-icons/hi';

export default function CopyLinkToClipboard(record) {
    const [copySuccess, setCopySuccess] = useState('Copy');

    async function copyLinkUrlToClipboard() {
        try {
            await navigator.clipboard.writeText(record.recordLink);
            const msg = 'Successful!';
            setCopySuccess(msg);
        } catch (err) {
            setCopySuccess('Opps, unable to copy');
        }
    }

    return (
        <CopyLink>
            <CopyLinkIcon onClick={copyLinkUrlToClipboard} />
            <Description>{copySuccess}</Description>
        </CopyLink>
    );
}

const CopyLink = styled.div`
    display: grid;
    grid-template-rows: min-content min-content;
    justify-items: center;
    align-items: center;
    text-align: center;
    color: var(--grey-50);
`;

const CopyLinkIcon = styled(HiOutlineClipboardCopy)`
    color: var(--secondary1);
    height: 30px;
    width: 30px;
`;
const Description = styled.p`
    font-size: 0.6em;
`;
