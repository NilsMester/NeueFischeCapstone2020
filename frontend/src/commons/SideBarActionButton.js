import React from 'react';
import styled from 'styled-components/macro';

export default function SideBarActionButton({ children, ...rest }) {
    return <SidebarButtonStyled {...rest}>{children}</SidebarButtonStyled>;
}

const SidebarButtonStyled = styled.button`
  color: var(--white1);
  border: var(--gray-50);
  border-radius: var(--size-xs);
  background: var(--graymain);
  text-transform: uppercase;
  
`;