import React from 'react';
import styled from 'styled-components/macro';
import {useHistory} from "react-router-dom";

export default function Header({titel}){
    const history = useHistory();

    return(
        <HeaderStyled>
            <HeadingStyled>{titel}</HeadingStyled>
            <LogoIcon onClick={() => history.push(`/home`)}>
                <img src="./header_Tab_Log_Logo.png" alt="Tab Log Logo"/>
            </LogoIcon>
        </HeaderStyled>
    )
}

const HeaderStyled = styled.header`
  display: grid;
  grid-template-columns: 1fr;
  font-family: 'Orbitron', sans-serif;
 
  background: var(--grey-50);
  padding: var(--size-xs);
  background: linear-gradient(
        to top,
    #868686,
    #737373,
    var(--grey-50),
    var(--grey-50),
    #555555,
    var(--grey-main))
`;

const HeadingStyled = styled.h1`
align-self: center;
justify-self: center;
font-size: 1.9em;
margin: 0;
color: var(--white2);
`

const LogoIcon = styled.div`
position: absolute;
left: 10px;
top: 8px;
`
