import React from 'react';
import styled from 'styled-components/macro';
import {css} from "styled-components";

export default function SideBarActionButton({ children, ...rest }) {
    return <SidebarButtonStyled {...rest}>{children}</SidebarButtonStyled>;
}

const SidebarButtonStyled = styled.button`
  width: 120px;
  height: 36px;
  color: var(--orange-75);
  border: var(--gray-50);
  border-radius: var(--size-s) 0 0 var(--size-s);
  background: var(--grey-main);
  position: absolute;
  right: 0;
  
  ${(props) =>
    props.first && props.showFirstSidebarArea
        ? css`
          top: 3%;
        `
        : props.first && !props.showFirstSidebarArea
        ? css`
          top: 15%;
        `

        : props.second && !props.showFirstSidebarArea
        ? css`
          top: 25%;
        `
            
        
        : css`
          top: 74%;
        `}
`;