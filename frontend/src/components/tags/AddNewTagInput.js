import React, {useState} from 'react';
import UserTagList from "./UserTagList";
import styled from 'styled-components/macro';

export default function AddNewTagInput({recordData, setRecordData}){

    const [addTags, setAddTags] = useState("");

    return (
        <SidebarStyled>

            <SidebarSection3Styled>
                <UserTagList recordData={recordData} setRecordData={setRecordData}/>
            </SidebarSection3Styled>

            <SidebarSection4Styled>
                <input name="addTags"
                       value={addTags || ""}
                       onChange={event => setAddTags(event.target.value)}
                       type="text"/>
                <button type="button" onClick={handleTagKlickButton}>Add Tag</button>
            </SidebarSection4Styled>

        </SidebarStyled>
    )

    function handleTagKlickButton() {
        setRecordData({...recordData, tagsList: [...recordData.tagsList, addTags]});
        setAddTags("");
    }
}

const SidebarStyled = styled.div`
display: grid;
position: relative;
align-self: center;
justify-content: end;
row-gap: 50px;
`

const SidebarSection3Styled = styled.section`
display: grid;
height: 50vh;
justify-content: end;
overflow-x: scroll;
`

const SidebarSection4Styled = styled.label`
display: grid;
align-content: end;
justify-content: end;

`