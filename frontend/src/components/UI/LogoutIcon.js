import React from 'react';
import styled from 'styled-components/macro';
import { RiLogoutBoxLine } from 'react-icons/ri';

export default function LogoutIcon() {
    return <LogoutIconStyled />;
}

const LogoutIconStyled = styled(RiLogoutBoxLine)`
    color: var(--secondary1);
    height: 30px;
    width: 30px;
`;
