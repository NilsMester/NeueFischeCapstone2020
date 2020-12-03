import React from 'react';
import styled from 'styled-components/macro';
import {useHistory} from "react-router-dom";
import {IoChevronBackSharp} from "react-icons/io5";
import {FaRegSave} from "react-icons/fa";

export default function TabBar({ onSave, recordData}){
    const history = useHistory();
return(
    <ActionBarStyled>
        <ButtonLeftStyled><HistoryGoBackButtonStyled onClick={() => history.goBack()}/></ButtonLeftStyled>
        <ButtonRightStyled onClick={handleSubmit}><SafeButtonStyled>Save</SafeButtonStyled></ButtonRightStyled>
    </ActionBarStyled>
)

    function handleSubmit(event) {
        event.preventDefault();
        onSave(recordData);
    }

}

const ActionBarStyled = styled.section`
display: grid;
grid-template-columns: 0.5fr 0.5fr;
background-color: rgba(65,65,65,0.1);
`

const ButtonLeftStyled = styled.button`
width: auto;
height: auto;
border-radius: 30% 30% 0 0;
background-color: var(--grey-50);
`

const ButtonRightStyled = styled.button`
width: auto;
height: auto;
border-radius: 30% 30% 0 0;
background-color: var(--grey-50);
`

const HistoryGoBackButtonStyled = styled(IoChevronBackSharp)`
height: 35px;
width: 35px;
color: var(--secondary1);
`

const SafeButtonStyled = styled(FaRegSave)`
height: 35px;
width: 35px;
color: var(--secondary1);
`
