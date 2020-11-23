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
    width: 80px;
    height: 35.5px;
    position: relative;
    padding: 2px;
    margin-right: 4px;
    border-radius: 4px;
    background: linear-gradient(
        to right,
    #FFC491,
    #FFC491,
    #FFC491,
    #FFC491
);
 
 &::before{
    content: "";
    display: block;
    position: absolute;
    top: 8px;
    left: -6px;
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
    top: 8px;
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
    top: 8px;
    left: -6px;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: #414141;
    z-index: 3;
    };
    
    &::after{
    content: "";
    display: block;
    position: absolute;
    top: 8px;
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
    left: 2px;
    width: 10px;
    height: 25px;
    background: #414141;
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
