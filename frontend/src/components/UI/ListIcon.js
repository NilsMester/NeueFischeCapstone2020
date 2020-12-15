import React from 'react';
import styled from 'styled-components/macro';
import { HiViewList } from 'react-icons/hi';

export default function ListIcon() {
    return <LogoutIcon />;
}

const LogoutIcon = styled(HiViewList)`
    color: var(--secondary1);
    height: 30px;
    width: 30px;
`;
