import React, {useContext} from 'react';
import RecordContext from "../contexts/RecordContext";
import styled from 'styled-components/macro';
import Tag from "./Tag";

export default function UserRecordsList () {

    const {userTagsList} = useContext(RecordContext);

    return (
        <StyledTagsList>
            {userTagsList?.map((userTag) => (
                <StyledListItem key={userTag._id}>
                    <Tag
                        userTag={userTag}
                        actions={[
                        ]}
                    />
                </StyledListItem>
            ))}
        </StyledTagsList>
    );
}

const StyledTagsList = styled.ul `
list-style: none;
padding: 0;
margin: 0;

    `;

const StyledListItem = styled.li`
max-height: 40px;
display: grid;
align-content: center;
`
