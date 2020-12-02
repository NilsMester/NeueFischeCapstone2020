import React from "react";
import styled from "styled-components/macro";
import {css} from "styled-components";

export default function InputField({ children, ...rest }) {
    return <InputFieldStyled {...rest}>{children}</InputFieldStyled>;
}


const InputFieldStyled = styled.input`
  display: block;
  background-color: var(--grey-50);
  border-radius: 10px;
  padding: var(--size-s);
  color: lightgrey;
  
  border-width: thin;
  border-style: solid;
  border-color: lightgrey;
  :focus {
    outline: none;
}
  ${(props) =>
    props.titel
        ? css`
          width: 75%;
          
        `
        
        : props.recordLink
        ? css`
           width: 100%;
          
        `

        : props.description
            ? css`
           width: 100%;
          
        `

        : props.search
            ? css`
            width: 33%;
          
        `
        : css`

        `}

`