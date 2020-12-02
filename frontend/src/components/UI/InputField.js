import React from "react";
import styled from "styled-components/macro";
import {css} from "styled-components";

export default function InputField({ children, ...rest }) {
    return <InputFieldStyled {...rest}>{children}</InputFieldStyled>;
}


const InputFieldStyled = styled.input`
  display: block;
  background-color: var(--grey-50);
  padding: var(--size-s);
  color: var(--white1);
  border-radius: var(--size-s);
  border-width: thin;
  border-style: solid;
  border-color: lightgrey;
  :focus {
    outline: none;
}
  ${(props) =>
    props.titel
        ? css`
          width: 100%;
          padding: var(--size-s);
          font-size: 0.8em;
        `
        
        : props.recordLink
        ? css`
           width: 100%;
           padding: 10px;
           font-size: 0.5em;
        `

        : props.search
            ? css`
            width: 100%;
            font-size: 0.8em;
        `
        : css`
           
        `}

`