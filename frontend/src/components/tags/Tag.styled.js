import React from 'react';
import styled from 'styled-components/macro';

export default function TagStyled({ onClick, chosen, children }) {
    return (
        <VisualBorder chosen={chosen} onClick={onClick}>
            <RightHide />
            <LeftHide />
            <BorderVisualWrapper>
                <TagName>{children}</TagName>
            </BorderVisualWrapper>
        </VisualBorder>
    );
}

const VisualBorder = styled.div`
    background: ${(props) =>
        props.chosen
            ? 'linear-gradient(to right,var(--secondary1),var(--secondary1),var(--secondary1),var(--secondary1))'
            : 'linear-gradient(to right,var(--orange-75),var(--orange-75),var(--orange-75),var(--orange-75))'};
    width: 110px;
    height: 30px;
    position: relative;
    padding: 2px;
    border-radius: 4px;
    z-index: 1;
    box-shadow: 0 10px 10px -10px var(--grey-50);

    &::before {
        background: ${(props) =>
            props.chosen
                ? 'linear-gradient(to right,var(--secondary1),var(--secondary1),var(--secondary1),var(--secondary1))'
                : 'linear-gradient(to right,var(--orange-75),var(--orange-75),var(--orange-75),var(--orange-75))'};
        content: '';
        display: block;
        position: absolute;
        top: 7px;
        left: -4px;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        z-index: 8;
    }

    &::after {
        background: ${(props) =>
            props.chosen
                ? 'linear-gradient(to right,var(--secondary1),var(--secondary1),var(--secondary1),var(--secondary1))'
                : 'linear-gradient(to right,var(--orange-75),var(--orange-75),var(--orange-75),var(--orange-75))'};
        content: '';
        display: block;
        position: absolute;
        top: 7px;
        right: -9px;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        z-index: 2;
    }
`;
const BorderVisualWrapper = styled.div`
    display: grid;
    align-content: center;
    justify-content: center;
    font-size: 0.6em;
    color: var(--orange-75);
    cursor: pointer;
    width: 100%;
    height: 100%;
    background: var(--grey-50);
    border-radius: 3px;
    position: relative;

    &::before {
        content: '';
        display: block;
        position: absolute;
        top: 7px;
        left: -4px;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: var(--grey-50);
        z-index: 9;
    }

    &::after {
        content: '';
        display: block;
        position: absolute;
        top: 7px;
        right: -9px;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: var(--white1);
        z-index: 3;
    }
`;
const LeftHide = styled.div`
    position: absolute;
    top: 6px;
    left: 2px;
    width: 11px;
    height: 18px;
    background: var(--grey-50);
    z-index: 8;
`;
const RightHide = styled.div`
    position: absolute;
    top: 6px;
    right: -11px;
    width: 11px;
    height: 18px;
    background: var(--white1);
    z-index: 4;
`;
const TagName = styled.p`
    z-index: 10;
    font-size: 0.9em;
`;
