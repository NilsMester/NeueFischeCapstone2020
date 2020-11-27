import React, {useState} from 'react';
import styled from 'styled-components/macro';
import TagStyled from "./Tag.styled";

export default function RecordTagsListItem({userTag, recordData, setRecordData}){

    const [chosenTag, setChosenTag] = useState(false);

    function handleToggle(){
        setChosenTag(!chosenTag)
    }

    return (
        <StyledListItem>
            <TagStyled chosen={chosenTag} onClick={handleToggle} userTag={userTag}>
                {userTag}
            </TagStyled>
        </StyledListItem>
    )
}

const StyledListItem = styled.li`
max-height: 40px;
display: grid;
align-content: center;
padding: 2px 0;
`

