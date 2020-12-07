import React from 'react';
import {useHistory} from 'react-router-dom';
import styled from 'styled-components/macro';
import UserRecordItem from "./UserRecordItem";
import RecordActionButton from "../UI/RecordActionButton";

export default function UserRecordList ({records}) {

    const history = useHistory();

    return (
        <>
            <StyledRecordsList>
                {records?.map((record) => (
                    <li key={record.id}>
                        <UserRecordItem
                            record={record}
                            actions={[
                                <RecordActionButton key="details" onClick={() => history.push(`/record/${record.id}`)}>
                                    Details
                                </RecordActionButton>
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
