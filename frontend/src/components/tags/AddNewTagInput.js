import React, {useState} from 'react';
import styled from 'styled-components/macro';
import InputField from "../UI/InputField";
import {RiAddCircleFill} from "react-icons/ri";

export default function AddNewTagInput({recordData, setRecordData}){

    const [addNewTag, setAddNewTag] = useState("");

    return (
        <SidebarSection4Styled>
            <InputField search
                        name="addNewTag"
                        placeholder="Add new Tag"
                        value={addNewTag || ""}
                        onChange={event => setAddNewTag(event.target.value)}
                        type="text"/>
            <NewRecordButtonStyled type="button" onClick={handleTagKlickButton}>Add Tag</NewRecordButtonStyled>
        </SidebarSection4Styled>
    )

    function handleTagKlickButton() {
        setRecordData({...recordData, tagList: [...recordData.tagList, addNewTag]});
        setAddNewTag("");
    }
}

const SidebarSection4Styled = styled.label`
display: grid;
align-content: center;
justify-items: center
`

const NewRecordButtonStyled = styled(RiAddCircleFill)`
height: 30px;
width: 30px;
position: relative;
top: -8px;
color: var(--orange-75);
`

