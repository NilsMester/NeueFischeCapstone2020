import React from 'react';
import styled from 'styled-components/macro';
import {useHistory} from "react-router-dom";
import {TiArrowBack} from "react-icons/ti";
import {RiAddCircleFill} from "react-icons/ri";

export default function Header({titel}){
    const history = useHistory();
    return(
        <HeaderStyled>
            <HistoryGoBackButtonStyled onClick={() => history.goBack()}/>
            <HeadingStyled>{titel}</HeadingStyled>
            <NewRecordButtonStyled onClick={() => history.push(`/newRecord`)}/>
        </HeaderStyled>
    )
}

const HeaderStyled = styled.header`
  display: grid;
  grid-template-columns: min-content 1fr min-content;

  background: var(--grey-main);
  padding: var(--size-s);
`;

const HeadingStyled = styled.h1`
align-self: center;
justify-self: center;
margin: 0;
color: var(--white2);
`

const HistoryGoBackButtonStyled = styled(TiArrowBack)`
height: 35px;
width: 35px;
color: var(--secondary1);
`

const NewRecordButtonStyled = styled(RiAddCircleFill)`
height: 35px;
width: 35px;
color: var(--secondary1);
`
