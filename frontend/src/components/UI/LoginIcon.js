import React from 'react';
import styled from 'styled-components/macro';
import { RiLoginBoxLine } from 'react-icons/ri';

export default function LoginIcon() {
    return <LoginIconStyled />;
}

const LoginIconStyled = styled(RiLoginBoxLine)`
    color: var(--secondary1);
    height: 30px;
    width: 30px;
`;
