import React, {useContext} from 'react';
import styled from 'styled-components/macro';
import TagDesign from "./TagDesign";
import TagsContext from "../contexts/TagsContext";

export default function UserTagList () {

    const {userTagsList} = useContext(TagsContext);

    return (
        <StyledTagsList>
            {userTagsList?.map((userTag) => (
                <StyledListItem key={userTag._id}>
                    <TagDesign>
                        {userTag._id}
                    </TagDesign>
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
padding: 2px 0;
`
