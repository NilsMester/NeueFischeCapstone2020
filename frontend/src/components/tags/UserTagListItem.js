import React from 'react';
import styled from 'styled-components/macro';
import TagStyled from "./Tag.styled";

export default function RecordTagsListItem({userTag}){




    return (
        <StyledListItem>
            <TagStyled>
                {userTag}
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

