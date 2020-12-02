import React from 'react';
import styled from 'styled-components/macro';
import {TiArrowBack} from "react-icons/ti";
import {useHistory} from "react-router-dom";

export default function TabBar({ onSave, recordData}){
    const history = useHistory();
return(
        <ActionBarStyled>
            <ButtonLeftStyled><HistoryGoBackButtonStyled onClick={() => history.goBack()}/></ButtonLeftStyled>
    <ButtonRightStyled onClick={handleSubmit}>Save</ButtonRightStyled>
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
border-radius: 0 75% 0 0;
`

const ButtonRightStyled = styled.button`
width: auto;
height: auto;
border-radius: 75% 0 0 0;
`

const HistoryGoBackButtonStyled = styled(TiArrowBack)`
height: 35px;
width: 35px;
color: var(--secondary1);
`
