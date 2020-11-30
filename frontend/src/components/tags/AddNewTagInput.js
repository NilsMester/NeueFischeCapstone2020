import React, {useState} from 'react';
import styled from 'styled-components/macro';

export default function AddNewTagInput({recordData, setRecordData}){

    const [addTags, setAddTags] = useState("");

    return (
        <SidebarSection4Styled>
            <input name="addTags"
                   value={addTags || ""}
                   onChange={event => setAddTags(event.target.value)}
                   type="text"/>
            <button type="button" onClick={handleTagKlickButton}>Add Tag</button>
        </SidebarSection4Styled>
    )

    function handleTagKlickButton() {
        setRecordData({...recordData, tagList: [...recordData.tagList, addTags]});
        setAddTags("");
    }
}

const SidebarSection4Styled = styled.label`
display: grid;
align-content: end;
justify-content: end;

`