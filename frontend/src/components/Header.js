import React from 'react';
import styled from 'styled-components/macro';
import {useHistory} from "react-router-dom";
import {RiAddCircleFill} from "react-icons/ri";

export default function Header({titel}){
    const history = useHistory();
    return(
        <HeaderStyled>

            <HeadingStyled>{titel}</HeadingStyled>
            <NewRecordButtonStyled onClick={() => history.push(`/newRecord`)}/>
        </HeaderStyled>
    )
}

const HeaderStyled = styled.header`
  display: grid;
  grid-template-columns: 1fr min-content;

  background: var(--grey-main);
  padding: var(--size-s);
`;

const HeadingStyled = styled.h1`
align-self: center;
justify-self: center;
margin: 0;
color: var(--white2);
`

const NewRecordButtonStyled = styled(RiAddCircleFill)`
height: 35px;
width: 35px;
color: var(--secondary1);
`
