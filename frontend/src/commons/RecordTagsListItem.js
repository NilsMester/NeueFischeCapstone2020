import React from 'react';
import styled from 'styled-components/macro';
import TagDesign from "./TagDesign";

export default function RecordTagsListItem({recordTagItem, className}){

    return (
        <StyledListItem className={className}>
            <TagDesign>
                {recordTagItem}
            </TagDesign>
        </StyledListItem>
    )
}

const StyledListItem = styled.li`
display: inline;
float: left;
padding: 8px 6px 0 6px;
`

