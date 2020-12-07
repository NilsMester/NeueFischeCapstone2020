import React from 'react';
import styled from 'styled-components/macro';
import UserRecordItem from "./UserRecordItem";
import DetailsIcon from "../DetailsIcon";

export default function UserRecordList ({records}) {


    return (
        <>
            <StyledRecordsList>
                {records?.map((record) => (
                    <li key={record.id}>
                        <UserRecordItem
                            record={record}
                            actions={[
                                <DetailsIcon key="details" record={record}/>
                            ]}
                        />
                    </li>
                ))}
            </StyledRecordsList>
        </>
    );
}

const StyledRecordsList = styled.ul`
    padding: 0;
    overflow: scroll;
    list-style: none;
    display:grid;
    grid-area: recordsList;
    row-gap: 50px;
    grid-auto-rows: min-content;
    margin:0;
 
`;
