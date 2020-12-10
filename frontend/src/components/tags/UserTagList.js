import React from 'react';
import styled from 'styled-components/macro';
import UserTagListItem from "./UserTagListItem";
import {css} from "styled-components";

export default function UserTagList ({tags,searchTermTagsArray , onTagClick, ...rest}) {

    return (
        <StyledTagsList {...rest}>
            {tags?.map((tag) => (
                <UserTagListItem {...rest} key={tag} tag={tag} searchTermTagsArray={searchTermTagsArray} onClick={()=>onTagClick(tag)}/>
            ))}
        </StyledTagsList>
    );
}

const StyledTagsList = styled.ul`

${(props) =>
    props.sidebar
        ? css`
          list-style: none;
          padding: 0 2px 0 0;
          margin: 0;
          display: grid;
          height: 30vh;
          width: 33vw;
          justify-content: end;
          align-content: start;
          row-gap: 4px;
          overflow-y: scroll;
          overflow-x: hidden;
          -ms-overflow-style: none;
          ::-webkit-scrollbar {
          display: none;
          }
        `
        
        : props.formTags
        ? css`
          width: 62vw;
          height: 25vh;
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

