import RecordTagsListItem from "./RecordTagsListItem";
import React from "react";
import styled from 'styled-components/macro';

export default function RecordTagsList({recordTagsList}) {

    return (
        <StyledTagsList>
            {recordTagsList?.map((recordTagItem, index) => (
                <RecordTagsListItem key={index} recordTagItem={recordTagItem}/>
                )
            )}
        </StyledTagsList>
    )
}

const StyledTagsList = styled.ul `
overflow: scroll;
list-style: none;
float: left;
padding: 0;
margin: 0;
row-gap: 12px;
grid-auto-rows: min-content
`;