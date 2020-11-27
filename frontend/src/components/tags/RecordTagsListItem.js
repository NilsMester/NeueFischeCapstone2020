import React from 'react';
import styled from 'styled-components/macro';
import TagStyled from "./Tag.styled";

export default function RecordTagsListItem({recordTagItem}){

    return (
        <StyledListItem>
            <TagStyled>
                {recordTagItem}
            </TagStyled>
        </StyledListItem>
    )
}

const StyledListItem = styled.li`
display: inline-block;
padding: 6px 0 0 0;
`

