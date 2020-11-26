import React from 'react';
import styled from 'styled-components/macro';
import SideBarActionButton from "./RecordActionButton";

export default function ActionBar({left, right}){

return(
        <ActionBarStyled>
    <ButtonLeftStyled>left</ButtonLeftStyled>
    <ButtonRightStyled>right</ButtonRightStyled>
        </ActionBarStyled>
)


}

const ActionBarStyled = styled.section`
display: grid;
grid-template-columns: 0.5fr 0.5fr;
background-color: rgba(65,65,65,0.1);
`
const ButtonLeftStyled = styled(SideBarActionButton)`
width: auto;
height: auto;
border-radius: 0 75% 0 0;
`
const ButtonRightStyled = styled(SideBarActionButton)`
width: auto;
height: auto;
border-radius: 75% 0 0 0;
`
