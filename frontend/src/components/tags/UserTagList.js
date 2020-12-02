import React from 'react';
import styled from 'styled-components/macro';
import UserTagListItem from "./UserTagListItem";
import {css} from "styled-components";

export default function UserTagList ({tags, onTagClick, ...rest}) {

    return (
        <StyledTagsList {...rest}>
            {tags?.map((tag) => (
                <UserTagListItem key={tag} tag={tag} onClick={() => onTagClick(tag)}/>
            ))}
        </StyledTagsList>
    );
}

const StyledTagsList = styled.ul`

${(props) =>
    props.sidebar
        ? css`
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          height: 40vh;
          width: 33vw;
          justify-content: end;
          align-content: start;
          overflow-x: scroll;
          -ms-overflow-style: none;
          ::-webkit-scrollbar {
          display: none;
          }
        `

        : props.recordForm
        ? css` 
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          height: 33vh;
          justify-content: center;
          align-content: start;
          overflow-x: scroll;
          -ms-overflow-style: none;
          ::-webkit-scrollbar {
          display: none;
          }
        `
        : css`
          overflow: scroll;
          list-style: none;
          text-align: center;
          padding: 0;
          margin: 0;  
          `
}`;

