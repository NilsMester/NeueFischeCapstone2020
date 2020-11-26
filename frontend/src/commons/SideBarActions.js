import React, {useContext} from 'react';
import {RecordFormDataContext} from "../pages/addRecordPage/AddRecordPage";
import UserTagList from "./UserTagList";
import styled from 'styled-components/macro';

export default function RecordForm(){

    const {recordTagsList, setRecordTagsList, handleTagKlickButton} = useContext(RecordFormDataContext);

    return (
        <SidebarStyled>

            <SidebarSection3Styled>
                <UserTagList/>
            </SidebarSection3Styled>

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