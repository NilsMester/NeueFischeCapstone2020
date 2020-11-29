import React, {useContext} from 'react';
import styled from 'styled-components/macro';

import TagsContext from "../../contexts/TagsContext";
import UserTagListItem from "./UserTagListItem";

export default function UserTagList ({recordData, setRecordData}) {

    const {userTagsList} = useContext(TagsContext);

    return (
        <StyledTagsList>
            {userTagsList?.map((userTag) => (
                <UserTagListItem key={userTag._id} userTag={userTag._id} recordData={recordData} setRecordData={setRecordData}/>
            ))}
        </StyledTagsList>
    );
}

const StyledTagsList = styled.ul`
list-style: none;
padding: 0;
margin: 0;
`

