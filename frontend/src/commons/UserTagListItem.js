import React from 'react';
import styled from 'styled-components/macro';
import TagDesign from "./TagDesign";

export default function RecordTagsListItem({userTag}){

    return (
        <StyledListItem>
            <TagDesign>
                {userTag}
            </TagDesign>
        </StyledListItem>
    )
}

const StyledListItem = styled.li`
max-height: 40px;
display: grid;
align-content: center;
padding: 2px 0;
`

