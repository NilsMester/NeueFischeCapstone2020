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
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--grey-main);
  padding: var(--size-s);
  
`;

const HeadingStyled = styled.h1`
margin: 0;
color: var(--white2);

`
