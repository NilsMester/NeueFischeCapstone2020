import React from 'react';
import styled from 'styled-components/macro';
import TagStyled from "./Tag.styled";
import {css} from "styled-components";

export default function RecordTagsListItem({tag, onClick, ...rest}){

    return (
        <StyledListItem {...rest}>
            <TagStyled onClick={onClick}>
                {tag}
            </TagStyled>
        </StyledListItem>
    )
}

const StyledListItem = styled.li`
max-height: 40px;
display: grid;
align-content: center;
padding: 2px 0;

 ${(props) =>
    props.sidebar
        ? css`
        max-height: 40px;
        display: grid;
        align-content: center;
        padding: 2px 0;
        `
        : css`
          display: inline-block;
          padding: 6px 0 0 0; 
          `
}`;