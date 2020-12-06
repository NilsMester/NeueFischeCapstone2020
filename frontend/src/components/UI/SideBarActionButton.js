import styled from 'styled-components/macro';
import {css} from "styled-components";

export default styled.button`
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
        : props.delete
            ? css`
          top: 26%;
        ` 
            : css`
          position: relative;
          
        `}
`;