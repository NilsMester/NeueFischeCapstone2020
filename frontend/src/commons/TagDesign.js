import React, {} from 'react';
import styled from 'styled-components/macro';

export default function TagDesign({children}){
    return (
        <VisualBorder id="ticket">
            <RightHide/>
            <LeftHide/>
            <BorderVisualWrapper>
                {children}
            </BorderVisualWrapper>
        </VisualBorder>
    )
}

const VisualBorder = styled.div`
    width: 65px;
    height: 30.5px;
    margin: var(--size-m);
    position: relative;
    padding: 2px;
    border-radius: 4px;
    background: linear-gradient(
        to right,
    #2C2C2C,
    #2C2C2C,
    #2C2C2C,
    #2C2C2C
);
 
 &::before{
    content: "";
    display: block;
    position: absolute;
    top: 6px;
    left: -12px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: #FFC491;
    z-index: 2;
 }
 
&::after{
content: "";
    display: block;
    position: absolute;
    top: 6px;
    right: -12px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: #FFC491;
    z-index: 2;
}
`
const BorderVisualWrapper = styled.div`
    display: grid;
    align-content: center;
    justify-content: center;    
    font-size: 0.5em;
    color: var(--orange-75);
    width: 100%;
    height: 100%;
    background: var(--grey-50);
    border-radius: 3px;
    position: relative;
    
    &::before{
    content: "";
    display: block;
    position: absolute;
    top: 6px;
    left: -12px;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: var(--white1);
    z-index: 3;
    };
    
    &::after{
    content: "";
    display: block;
    position: absolute;
    top: 6px;
    right: -12px;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: var(--white1);
    z-index: 3;
    }
`
const LeftHide = styled.div`
    position: absolute;
    top: 5px;
    left: -12px;
    width: 12px;
    height: 20px;
    background: var(--white1);
    z-index: 4;
`
const RightHide = styled.div`
   position: absolute;
    top: 5px;
    right: -12px;
    width: 12px;
    height: 20px;
    background: var(--white1);
    z-index: 4;
`
