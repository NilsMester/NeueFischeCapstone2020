import React from 'react';
import styled from 'styled-components/macro';

export default function TagStyled({chosen,onClick, children}){

    return (
        <VisualBorder  chosen={chosen} onClick={onClick}>
            <RightHide/>
            <LeftHide/>
            <BorderVisualWrapper>
                {children}
            </BorderVisualWrapper>
        </VisualBorder>
    )
}

const VisualBorder = styled.div`
    background: ${props => props.chosen ? "linear-gradient(to right,var(--secondary1),var(--secondary1),var(--secondary1),var(--secondary1))":"linear-gradient(to right,var(--orange-75),var(--orange-75),var(--orange-75),var(--orange-75))"};
    width: 100px;
    height: 30px;
    position: relative;
    padding: 2px;
    margin-right: 4px;
    border-radius: 4px;
    z-index: 1;
    
  /*  background: linear-gradient(
        to right,
    var(--orange-75),
    var(--orange-75),
    var(--orange-75),
    var(--orange-75)
)*/;
 
 &::before{
    background: ${props => props.chosen ? "linear-gradient(to right,var(--secondary1),var(--secondary1),var(--secondary1),var(--secondary1))":"linear-gradient(to right,var(--orange-75),var(--orange-75),var(--orange-75),var(--orange-75))"};
    content: "";
    display: block;
    position: absolute;
    top: 7px;
    left: -5px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    z-index: 8;
 }
 
&::after{
    background: ${props => props.chosen ? "linear-gradient(to right,var(--secondary1),var(--secondary1),var(--secondary1),var(--secondary1))":"linear-gradient(to right,var(--orange-75),var(--orange-75),var(--orange-75),var(--orange-75))"};
    content: "";
    display: block;
    position: absolute;
    top: 7px;
    right: -10px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    z-index: 2;
}
`
const BorderVisualWrapper = styled.div`
    display: grid;
    align-content: center;
    justify-content: center;    
    font-size: 0.5em;
    color: var(--orange-75);
    cursor: pointer;
    width: 100%;
    height: 100%;
    background: var(--grey-50);
    border-radius: 3px;
    position: relative;
    
    &::before{
    content: "";
    display: block;
    position: absolute;
    top: 7px;
    left: -5px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: var(--grey-50);
    z-index: 9;
    };
    
    &::after{
    content: "";
    display: block;
    position: absolute;
    top: 7px;
    right: -10px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: var(--white1);
    z-index: 3;
    }
`
const LeftHide = styled.div`
    position: absolute;
    top:6px;
    left: 2px;
    width: 10px;
    height: 18px;
    background: var(--grey-50);
    z-index: 8;
`
const RightHide = styled.div`
   position: absolute;
    top: 6px;
    right: -10px;
    width: 10px;
    height: 18px;
    background: var(--white1);
    z-index: 4;
`
