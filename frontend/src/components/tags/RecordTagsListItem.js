import React from 'react';
import styled from 'styled-components/macro';
import TagStyling from "./Tag.styling";

export default function RecordTagsListItem({recordTagItem}){

    return (
        <StyledListItem>
            <TagStyling>
                {recordTagItem}
            </TagStyling>
        </StyledListItem>
    )
}

const StyledListItem = styled.li`
display: inline-block;
padding: 6px 0 0 0;
`

