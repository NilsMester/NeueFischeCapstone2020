import React, {useEffect, useState} from 'react';
import styled from 'styled-components/macro';
import TagStyled from "./Tag.styled";
import {css} from "styled-components";

export default function RecordTagsListItem({tag,searchTermTagsArray, onClick, ...rest}){

    const [chosenFilterTag, setChosenFilterTag] = useState(false);

    useEffect(()=>{
        if(!searchTermTagsArray){
            return null;
        }else if(searchTermTagsArray.includes(tag)){
            setChosenFilterTag(true)}
        else if(!searchTermTagsArray.includes(tag)){
            setChosenFilterTag(false)}
    }, [setChosenFilterTag, searchTermTagsArray, tag])

    return (
        <StyledListItem {...rest}>
            <TagStyled chosen={chosenFilterTag} onClick={onClick}>
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
        padding: 0;
        `
        : css`
          display: inline-block;
          padding: 8px 0 6px 4px; 
          `
}`;