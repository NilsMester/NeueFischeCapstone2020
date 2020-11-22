import React, {useContext} from 'react';
import RecordContext from "../contexts/RecordContext";
import styled from 'styled-components/macro';
import Tag from "./Tag";

export default function UserRecordsList () {

    const {userTagsList} = useContext(RecordContext);

    return (
        <StyledRecordsList>
            {userTagsList?.map((userTag) => (
                <li key={userTag._id}>
                    <Tag
                        userTag={userTag}
                        actions={[
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