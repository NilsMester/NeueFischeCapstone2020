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
          overflow-y: scroll;
          overflow-x: hidden;
          -ms-overflow-style: none;
          ::-webkit-scrollbar {
          display: none;
          }
        `
        
        : props.formTags
        ? css`
          width: 64vw;
          overflow: scroll;
          list-style: none;
          text-align: center;
          padding: 0;
          margin: 0; 
          overflow-x: hidden;
          overflow-y: scroll;
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

