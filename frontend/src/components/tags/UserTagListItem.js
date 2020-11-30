import React, {useState} from 'react';
import styled from 'styled-components/macro';
import TagStyled from "./Tag.styled";

export default function RecordTagsListItem({tag, onClick}){

    return (
        <StyledListItem>
            <TagStyled onClick={onClick}>
                {tag}
            </TagStyled>
        </StyledListItem>
    )
}

const StyledListItem = styled.li`
max-height: 40px;
display: grid;
align-content: center;
padding: 2px 0;
`
