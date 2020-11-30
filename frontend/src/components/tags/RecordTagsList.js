import RecordTagsListItem from "./RecordTagsListItem";
import React from "react";
import styled from 'styled-components/macro';

export default function RecordTagsList({recordTagList}) {

    return (
        <StyledTagsList>
            {recordTagList?.map((recordTagItem, index) => (
                <RecordTagsListItem key={index} recordTagItem={recordTagItem}/>
                )
            )}
        </StyledTagsList>
    )
}

const StyledTagsList = styled.ul `
overflow: scroll;
list-style: none;
text-align: center;
padding: 0;
margin: 0;
`;