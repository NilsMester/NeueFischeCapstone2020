import React from 'react';
import styled from 'styled-components/macro';
import {css} from "styled-components";

export default function SideBarActionButton({ children, ...rest }) {
    return <SidebarButtonStyled {...rest}>{children}</SidebarButtonStyled>;
}

const SidebarButtonStyled = styled.button`
  display: grid;
  align-content: center;
  position: absolute;
  color: var(--white1);
  border: var(--gray-50);
  border-radius: var(--size-xs);
  background: var(--grey-main);
  width: 90px;
  height: 30px;
  
  ${(props) =>
    props.first
        ? css`
          top:10%;
          right: 0;
        `
        : css`
          top:73%;
          right: 0;
        `}
  
`;

