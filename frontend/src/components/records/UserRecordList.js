import React, {useContext} from 'react';
import RecordContext from "../../contexts/RecordContext";
import { useHistory } from 'react-router-dom';
import styled from 'styled-components/macro';
import UserRecordItem from "./UserRecordItem";
import RecordActionButton from "../UI/RecordActionButton";

export default function UserRecordList () {

    const {records} = useContext(RecordContext);
    const history = useHistory();

    return (
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
    );
}

const StyledRecordsList = styled.ul`
    padding: 16px 0 0 0;
    overflow: scroll;
    list-style: none;
    
    display:grid;
    row-gap: 50px;
    grid-auto-rows: min-content;
    margin:0;
`;
