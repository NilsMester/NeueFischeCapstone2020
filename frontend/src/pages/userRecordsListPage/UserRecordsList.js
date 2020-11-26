import React, {useContext} from 'react';
import RecordContext from "../../contexts/RecordContext";
import { useHistory } from 'react-router-dom';
import styled from 'styled-components/macro';
import Record from "../../commons/Record";
import RecordActionButton from "../../commons/RecordActionButton";

export default function UserRecordsList () {

    const {records} = useContext(RecordContext);
    const history = useHistory();

    return (
        <StyledRecordsList>
            {records?.map((record) => (
                <li key={record.id}>
                    <Record
                        record={record}
                        actions={[
                            <RecordActionButton key="details"
                                                onClick={() => history.push(`/record/${record.id}`)}>
                                Details
                            </RecordActionButton>
                        ]}
                    />
                </li>
            ))}
        </StyledRecordsList>
    );
}

const StyledRecordsList = styled.ul `
    overflow: scroll;
    list-style: none;
    
    display:grid;
    row-gap: 16px;
    grid-auto-rows: min-content;
    margin:0;
    padding: 16px;
    
`;