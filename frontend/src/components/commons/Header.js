import React, { useContext } from 'react';
import styled from 'styled-components/macro';
import { useHistory } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';
import LogoutIcon from '../UI/LogoutIcon';

export default function Header({ titel, showLogout }) {
    const history = useHistory();
    const { logout } = useContext(UserContext);

    return (
        <HeaderStyled>
            <Heading>{titel}</Heading>
            <LogoIcon onClick={() => history.push(`/home`)}>
                <img src="/header_Tab_Log_Logo.png" alt="Tab Log Logo" />
            </LogoIcon>
            {showLogout ? (
                <Logout onClick={handleLogout}>
                    <LogoutIcon />
                </Logout>
            ) : null}
        </HeaderStyled>
    );

    function handleLogout() {
        logout();
        history.push('/login');
    }
}

const HeaderStyled = styled.header`
    display: grid;
    grid-template-columns: 1fr;
    font-family: 'Orbitron', sans-serif;

    background: var(--grey-50);
    padding: var(--size-xs);
    background: linear-gradient(
        to top,
        #868686,
        #737373,
        var(--grey-50),
        var(--grey-50),
        #555555,
        var(--grey-main)
    );
`;

const Heading = styled.h1`
    align-self: center;
    justify-self: center;
    font-size: 1.9em;
    margin: 0;
    color: var(--white2);
`;

const LogoIcon = styled.div`
    position: absolute;
    left: 10px;
    top: 8px;
`;

const Logout = styled.div`
    position: absolute;
    right: 10px;
    top: 10px;
    padding: 0;
`;
