import React, {useContext} from 'react';
import {RecordFormDataContext} from "../pages/addRecordPage/AddRecordPage";
import SideBarActionButton from "./SideBarActionButton";
import UserTagList from "./UserTagList";
import styled from 'styled-components/macro';

export default function RecordForm(){

    const {recordTagsList, setRecordTagsList, handleTagKlickButton} = useContext(RecordFormDataContext);

    return (
        <SidebarStyled>

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

}

const SidebarStyled = styled.div`
display: grid;

justify-content: end;
row-gap: 12px;
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
overflow-x: scroll;
`

const SidebarSection4Styled = styled.label`
display: grid;
align-content: end;
justify-content: end;

`