import React from 'react'
import styled from 'styled-components/macro';
import {HiLink} from "react-icons/hi";

export default function OpenLink({recordLink}){

    return (<OpenLinkStyled>
            <OpenLinkIconStyled onClick={()=>window.location.href = recordLink}/>
            <DescriptionStyled>Visit Link</DescriptionStyled>
        </OpenLinkStyled>
    )
}

const OpenLinkStyled = styled.div` 
display: grid;
grid-template-rows: min-content min-content;
justify-items: center;
align-items: center;
text-align: center;
color: var(--grey-50);
`

const OpenLinkIconStyled = styled(HiLink)`
color: var(--secondary1);
height: 30px;
width: 30px;
`
const DescriptionStyled = styled.p`
font-size: 0.6em;
`
