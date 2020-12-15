import React from 'react';
import styled from 'styled-components/macro';
import { ImSearch } from 'react-icons/im';
import { css } from 'styled-components';

export default function OpenLink({ ...rest }) {
    return (
        <OpenLinkStyled>
            <SearchIcon {...rest} />
        </OpenLinkStyled>
    );
}

const OpenLinkStyled = styled.div`
    display: grid;
    grid-template-rows: min-content min-content;
    justify-items: center;
    align-items: center;
    text-align: center;
    color: var(--grey-50);
`;

const SearchIcon = styled(ImSearch)`
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
