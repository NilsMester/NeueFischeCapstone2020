import styled from 'styled-components/macro';
import {css} from "styled-components";
import React from "react";

export default function SideBarActionButton({ children, ...rest }){
    return <SidebarButton {...rest}>{children}</SidebarButton>;
}

const SidebarButton = styled.button`
  width: 120px;
  height: 36px;
  color: var(--orange-75);
  border: var(--gray-50);
  border-radius: var(--size-s) 0 0 var(--size-s);
  background: var(--grey-50);
  box-shadow: 0 2px 5px 1px var(--grey-50);
  
  position: absolute;
  right: 0;
  
  ${(props) =>
    props.first
        ? css`
          top: 0;
        `
        : props.second && !props.showFirstSidebarArea
        ? css`
          top: 18%;
        `
        : props.firstSticky
            ? css`
          
          top: 9.6vh;
          bottom: 90.4vh;
          z-index: 20;
        ` 
            : props.secondSticky && !props.showFirstSidebarArea
                ? css`
          color: var(--secondary1);
          top: 18.5vh;
          bottom: 81.5vh;
           z-index: 20;
        `
        
        : props.edit
            ? css`
          top: 0;
          color: var(--secondary1);
          right: -10px;
        `
        : props.delete
            ? css`
          top: 34%;
          color: var(--secondary1);
          right: -10px;
        ` 
            : css`
          position: relative;
          
        `}
`;