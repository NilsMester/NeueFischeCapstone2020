import React from 'react';
import styled from 'styled-components/macro';
import {css} from "styled-components";

export default function SideBarActionButton({ children, ...rest }) {
    return <SidebarButtonStyled {...rest}>{children}</SidebarButtonStyled>;
}

const SidebarButtonStyled = styled.button`
 
  color: var(--white1);
  border: var(--gray-50);
  border-radius: var(--size-xs);
  background: var(--grey-main);

  
  ${(props) =>
    props.first
        ? css`
          top: 15%;
          right: 0;
        `
        : css`
           top: 65%;
          right: 0;
        `}
`;