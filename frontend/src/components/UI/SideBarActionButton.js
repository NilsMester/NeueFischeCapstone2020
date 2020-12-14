import styled from 'styled-components/macro';
import { css } from 'styled-components';
import React from 'react';

export default function SideBarActionButton({ children, ...rest }) {
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
    font-family: 'IBM Plex Mono', monospace;
    position: absolute;
    right: 0;
    outline: none;

    ${(props) =>
        props.first
            ? css`
                  top: 0;
              `
            : props.second && !props.showFirstSidebarArea
            ? css`
                  top: 55px;
                  z-index: 20;
              `
            : props.firstSticky &&
              !props.showFirstSidebarArea &&
              !props.showSecondSideBarArea
            ? css`
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  width: 80px;
                  top: 64px;
                  z-index: 20;
              `
            : props.firstSticky && props.showFirstSidebarArea
            ? css`
                  width: 120px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  top: 64px;
                  z-index: 20;
              `
            : props.firstSticky && props.showSecondSideBarArea
            ? css`
                  width: 120px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  top: 64px;
                  z-index: 20;
              `
            : props.secondSticky &&
              !props.showFirstSidebarArea &&
              !props.showSecondSideBarArea
            ? css`
                  width: 80px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  color: var(--secondary1);
                  top: 119px;
                  z-index: 20;
              `
            : props.secondSticky && props.showSecondSideBarArea
            ? css`
                  width: 120px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  color: var(--secondary1);
                  top: 119px;
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
                  top: 55px;
                  color: var(--secondary1);
                  right: -10px;
              `
            : props.secondInGrid
            ? css`
                  position: relative;
                  color: var(--orange-75);
                  display: flex;
                  align-items: center;
                  justify-content: center;
              `
            : css`
                  position: relative;
                  color: var(--secondary1);
                  display: flex;
                  align-items: center;
                  justify-content: center;
              `}
`;
