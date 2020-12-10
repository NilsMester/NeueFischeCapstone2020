import React from 'react'
import styled from 'styled-components/macro';
import {BiLogIn} from "react-icons/bi";

export default function Login(){

    return (<OpenLinkStyled>
            <LoginIcon/>
            <DescriptionStyled>Login</DescriptionStyled>
        </OpenLinkStyled>
    )
}

const OpenLinkStyled = styled.div` 
display: grid;
grid-template-rows: min-content min-content;
justify-items: center;
align-items: center;
text-align: center;
color: var(--grey-50);
`

const LoginIcon = styled(BiLogIn)`
color: var(--secondary1);
height: 30px;
width: 30px;
`
const DescriptionStyled = styled.p`
font-size: 0.6em;
`
