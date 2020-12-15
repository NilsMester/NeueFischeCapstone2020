import React from 'react';
import styled from 'styled-components/macro';
import { HiLink } from 'react-icons/hi';

export default function OpenLink({ recordLink }) {
    return (
        <OpenLinkStyled>
            <OpenLinkIcon onClick={() => (window.location.href = recordLink)} />
            <Description>Visit</Description>
        </OpenLinkStyled>
    );
}

const OpenLinkStyled = styled.div`
    display: grid;
    grid-template-rows: min-content min-content;
    justify-items: center;
    align-items: center;
    text-align: center;
    color: var(--grey-50);
`;

const OpenLinkIcon = styled(HiLink)`
    color: var(--secondary1);
    height: 30px;
    width: 30px;
`;
const Description = styled.p`
    font-size: 0.6em;
`;
