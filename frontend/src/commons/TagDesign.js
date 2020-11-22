import React, {} from 'react';
import styled from 'styled-components/macro';

export default function TagDesign(){
    return (
        <VisualBorder id="ticket">
            <RightHide/>
            <LeftHide/>
            <BorderVisualWrapper>
                    JavaScript
            </BorderVisualWrapper>
        </VisualBorder>
    )
}

const VisualBorder = styled.div`
    width: 650px;
    height: 325px;
    margin: var(--size-m);
    position: relative;
    padding: 5px;
    border-radius: 20px;
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
    top: 110px;
    left: -40px;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: #FFC491;
    z-index: 2;
 }
 
&::after{
content: "";
    display: block;
    position: absolute;
    top: 110px;
    right: -40px;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: #FFC491;
    z-index: 2;
}
`
const BorderVisualWrapper = styled.div`
    display: grid;
    align-content: center;
    justify-content: center;    
    font-size: 1em;
    color: var(--orange-75);
    width: 100%;
    height: 100%;
    background: var(--grey-50);
    border-radius: 15px;
    position: relative;
    
    &::before{
    content: "";
    display: block;
    position: absolute;
    top: 110px;
    left: -40px;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background: var(--white1);
    z-index: 3;
    };
    
    &::after{
    content: "";
    display: block;
    position: absolute;
    top: 110px;
    right: -40px;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background: var(--white1);
    z-index: 3;
    }
`
const LeftHide = styled.div`
    position: absolute;
    top: 110px;
    left: -50px;
    width: 50px;
    height: 100px;
    background: var(--white1);
    z-index: 4;
`
const RightHide = styled.div`
   position: absolute;
    top: 110px;
    right: -50px;
    width: 50px;
    height: 100px;
    background: var(--white1);
    z-index: 4;
`

const TagArea = styled.div` 
 padding: calc(39px * var(--size)) calc(155px * var(--size)) calc(
        39px * var(--size)
) calc(58px * var(--size));
padding: 25px;
`

const TagText = styled.p`

margin: 0;
padding: 0;

`
const ActionArea = styled.div`
 transform: rotate(90deg) translateY(calc(100px * var(--size)));
    transform-origin: bottom right;
    font-size: calc(40px * var(--size));
    font-weight: 700;
    text-align: center;
    width: calc(320px - 10px);
    border-bottom: 2px dashed #333;
    padding: 25px;
`