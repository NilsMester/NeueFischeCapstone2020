import React from 'react';
import styled from 'styled-components/macro';
import UserTagListItem from "./UserTagListItem";

export default function UserTagList ({tags, onTagClick}) {

    return (
        <StyledTagsList>
            {tags?.map((tag) => (
                <UserTagListItem key={tag} tag={tag} onClick={() => onTagClick(tag)}/>
            ))}
        </StyledTagsList>
    );
}

const StyledTagsList = styled.ul`
list-style: none;
padding: 0;
margin: 0;
`

