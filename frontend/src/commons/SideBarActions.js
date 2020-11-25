import React, {useContext, useState} from 'react';
import {RecordFormDataContext} from "../pages/addRecordPage/AddRecordPage";
import SideBarActionButton from "./SideBarActionButton";
import UserTagList from "./UserTagList";
import styled from 'styled-components/macro';

export default function RecordForm(){

    const {recordData, setRecordData} = useContext(RecordFormDataContext);
    const [recordTagsList, setRecordTagsList] = useState("")

    return(
    <SidebarStyled>

        <SidebarSection1Styled/>

        <SidebarSection2Styled>
            <SideBarActionButton>Tags</SideBarActionButton>
        </SidebarSection2Styled>

        <SidebarSection3Styled>
            <UserTagList/>
        </SidebarSection3Styled>

        <SidebarSection2Styled>
            <SideBarActionButton>New Tag</SideBarActionButton>
        </SidebarSection2Styled>

        <SidebarSection4Styled>
            <input name="recordTagsList"
                   value={recordTagsList || ""}
                   onChange={event => setRecordTagsList(event.target.value)}
                   type="text"/>
            <button type="button" onClick={handleTagKlickButton}>Add Tag</button>
        </SidebarSection4Styled>

    </SidebarStyled>
    )

    function handleTagKlickButton() {
        setRecordData({...recordData, tagsList: [...recordData.tagsList, recordTagsList]});
        setRecordTagsList("");
    }

}

const SidebarStyled = styled.div`
display: grid;
align-content: end;
justify-content: end;<
row-gap: 12px;
`
const SidebarSection1Styled = styled.section`
height: 25px;
`

const SidebarSection2Styled = styled.section`
display: grid;
align-content: end;
justify-content: end;
`

const SidebarSection3Styled = styled.section`
display: grid;
height: 50vh;
justify-content: end;
overflow-y: scroll;
`

const SidebarSection4Styled = styled.label`
display: grid;
align-content: end;
justify-content: end;
grid-template-rows: 0.5fr 1fr 1fr;
`