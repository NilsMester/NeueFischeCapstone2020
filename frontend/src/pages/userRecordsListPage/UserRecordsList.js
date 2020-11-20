import React, {useContext} from 'react';
import RecordContext from "../../contexts/RecordContext";
import { useHistory } from 'react-router-dom';
import styled from 'styled-components/macro';
import Record from "../../commons/Record";

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
                        <button>
                            key="details"
                            onClick={() => history.push(`record/${record.id}`)}
                        </button>
                    ]}
                    />
                </li>
            ))}
        </StyledRecordsList>
    );
}

const StyledRecordsList = styled.ul `
    li:last-child:after {
    content: '';
    display: block;
    height: 56px;
  }
    `;