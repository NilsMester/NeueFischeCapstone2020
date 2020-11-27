import React from 'react';
import styled from 'styled-components/macro';

export default function SideBarActionButton({ children, ...rest }) {
    return <SidebarButtonStyled {...rest}>{children}</SidebarButtonStyled>;
}

const SidebarButtonStyled = styled.button`
  color: var(--secondary1);
  border: var(--gray-50);
  border-radius: var(--size-xs);
  background: var(--grey-main);
  width: 90px;
  height: 30px;
`;