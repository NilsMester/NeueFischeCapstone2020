import React, {useState} from 'react';
import styled from 'styled-components/macro';

export default function AddNewTagInput({recordData, setRecordData}){

    const [addNewTag, setAddNewTag] = useState("");

    return (
        <SidebarSection4Styled>
            <InputStyled name="addNewTag"
                   value={addNewTag || ""}
                   onChange={event => setAddNewTag(event.target.value)}
                   type="text"/>
            <button type="button" onClick={handleTagKlickButton}>Add Tag</button>
        </SidebarSection4Styled>
    )

    function handleTagKlickButton() {
        setRecordData({...recordData, tagList: [...recordData.tagList, addNewTag]});
        setAddNewTag("");
    }
}

const SidebarSection4Styled = styled.label`
display: grid;
align-content: end;
justify-content: end;

`

const InputStyled = styled.input`
width: 120px;
`