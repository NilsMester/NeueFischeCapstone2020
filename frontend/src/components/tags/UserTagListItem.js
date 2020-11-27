import React from 'react';
import styled from 'styled-components/macro';
import TagStyling from "./Tag.styling";

export default function RecordTagsListItem({userTag}){

    return (
        <StyledListItem>
            <TagStyling>
                {userTag}
            </TagStyling>
        </StyledListItem>
    )
}

const StyledListItem = styled.li`
max-height: 40px;
display: grid;
align-content: center;
padding: 2px 0;
`

