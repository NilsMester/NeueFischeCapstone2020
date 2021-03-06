import React from 'react';
import styled from 'styled-components/macro';
import UserTagListItem from './TagListItem';
import { css } from 'styled-components';

export default function TagList({
    tags,
    searchTermTagsArray,
    onTagClick,
    ...rest
}) {
    return (
        <TagListStyled {...rest}>
            {tags?.map((tag) => (
                <UserTagListItem
                    {...rest}
                    key={tag}
                    tag={tag}
                    searchTermTagsArray={searchTermTagsArray}
                    onClick={() => onTagClick(tag)}
                />
            ))}
        </TagListStyled>
    );
}

const TagListStyled = styled.ul`
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
                  height: 20vh;
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
                  list-style: none;
                  text-align: center;
                  overflow-x: hidden;
                  overflow-y: scroll;
                  padding: 0 0 10px 0;
                  margin: 0;
                  -ms-overflow-style: none;
                  ::-webkit-scrollbar {
                      display: none;
                  }
              `}
`;
