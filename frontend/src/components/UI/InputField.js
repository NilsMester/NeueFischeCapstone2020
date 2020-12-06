import React from "react";
import styled from "styled-components/macro";
import {css} from "styled-components";

export default function InputField({ children, ...rest }) {
    return <InputFieldStyled {...rest}>{children}</InputFieldStyled>;
}


const InputFieldStyled = styled.input`
  display: block;
  height: 30px;
  background-color: var(--grey-25);
  padding: var(--size-s);
  color: var(--grey-main);
  border-radius: var(--size-s);
  border-width: thin;
  border-style: solid;
  border-color: lightgrey;
  box-shadow: 0 1px 5px 1px var(--grey-25);

  :focus {
    outline: none;
}
  ${(props) =>
    props.formField
        ? css`
          width: 100%;
          padding: 6px;
          font-size: 0.8em;
        `

        : props.search
            ? css`
            margin: 0;
            width: 120px;
            padding: 6px;
            font-size: 0.8em;
            right: 0;
        `
        : css`
           
        `}

`