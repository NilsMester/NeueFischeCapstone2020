import React from 'react'
import styled from 'styled-components/macro';
import {RiLogoutBoxLine} from "react-icons/ri";

export default function Logout(){

    return (
            <LogoutIcon/>
    )
}


const LogoutIcon = styled(RiLogoutBoxLine)`
color: var(--secondary1);
height: 30px;
width: 30px;
`
