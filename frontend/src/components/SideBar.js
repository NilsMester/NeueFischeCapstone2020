import React from 'react';
import UserTagList from "./tags/UserTagList";
import styled from 'styled-components/macro';
import AddNewTagInput from "./tags/AddNewTagInput";

export default function SideBar({ tags, onTagClick, searchTerm, setSearchTerm,recordData, setRecordData}){

    return(
        <>
            <SidebarStyled>
                <SidebarSection4Styled>
                    <UserTagList sidebar tags={tags} onTagClick={onTagClick}/>
                    <InputStyled name="search"
                                 value={searchTerm || ""}
                                 onChange={(event) => setSearchTerm(event.target.value)}
                                 type="text"/>
                </SidebarSection4Styled>
                <AddNewTagInput recordData={recordData} setRecordData={setRecordData}/>
            </SidebarStyled>
        </>
    )

}

const InputStyled = styled.input`
width: 120px;
`

const SidebarStyled = styled.div`
display: grid;
position: relative;
align-self: center;
justify-content: end;
row-gap: 25px;
`

const SidebarSection4Styled = styled.label`
display: grid;
align-content: end;
justify-content: end;

`