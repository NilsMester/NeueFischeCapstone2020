import React from 'react';
import styled from 'styled-components/macro';

export default function Header({titel}){
    return(
        <HeaderStyled>

            <HeadingStyled>{titel}</HeadingStyled>
        </HeaderStyled>
    )
}

const HeaderStyled = styled.header`
  display: grid;
  grid-template-columns: 1fr min-content;

  background: var(--grey-50);
  padding: var(--size-s);
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