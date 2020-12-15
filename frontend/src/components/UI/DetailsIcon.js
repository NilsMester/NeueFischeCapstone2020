import React from 'react';
import styled from 'styled-components/macro';
import { CgDetailsMore } from 'react-icons/cg';
import { useHistory } from 'react-router-dom';

export default function DetailsIcon({ record }) {
    const history = useHistory();

    return (
        <Details>
            <DetailsIconStyled
                key="details"
                onClick={() => history.push(`/record/${record.id}`)}
            />
            <Description>Details</Description>
        </Details>
    );
}

const Details = styled.div`
    display: grid;
    grid-template-rows: min-content min-content;
    justify-items: center;
    align-items: center;
    text-align: center;
    color: var(--grey-50);
`;

const DetailsIconStyled = styled(CgDetailsMore)`
    color: var(--secondary1);
    height: 30px;
    width: 30px;
`;

const Description = styled.p`
    font-size: 0.6em;
`;
