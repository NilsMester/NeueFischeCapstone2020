import React from 'react';
import styled from 'styled-components/macro';
import { ImSearch } from 'react-icons/im';
import { css } from 'styled-components';

export default function SearchIcon({ ...rest }) {
    return <SearchIconStyled {...rest} />;
}

const SearchIconStyled = styled(ImSearch)`
    display: grid;
    grid-template-rows: min-content min-content;
    justify-items: center;
    align-items: center;
    text-align: center;
    color: var(--grey-50);
    height: 15px;
    width: 15px;
    margin: 0 5px 0 0;
    ${(props) =>
        props.tagssearch
            ? css`
                  color: var(--orange-75);
              `
            : css`
                  color: var(--secondary1);
              `}
`;
