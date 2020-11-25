import React, {useContext, useReducer, useState} from 'react';
import {useHistory} from 'react-router-dom';
import styled from 'styled-components/macro';
import UserTagList from "./UserTagList";
import SideBarActionButton from "./SideBarActionButton";
import RecordTagsList from "./RecordTagsList";
import {RecordFormDataContext} from "../pages/addRecordPage/AddRecordPage";

export default function RecordForm({onSave,onChange, onAddTagKlick}) {

    const {recordData, setRecordData} = useContext(RecordFormDataContext)
    const {titel, recordLink, tagsList, description} = recordData
    const [recordTagsListInProgress, setRecordTagsListInProgress] = useState("")
    const history = useHistory();

    return (
        <FormStyled onSubmit={handleSubmit}>
            <DivStyled>
                <label>
                    Titel
                    <input name="titel"
                           value={titel || ""}
                           onChange={handleChange}
                           type="text"/>
                </label>

                <label>
                    RecordLink
                    <input name="recordLink"
                           value={recordLink || ""}
                           onChange={handleChange}
                           type="text"/>
                </label>
                <p>Tags</p>
                <RecordTagsList/>

                <label>
                    Description
                    <input name="description"
                           value={description || ""}
                           onChange={handleChange}
                           type="test"/>
                </label>

                <button type="button" onClick={onCancel}>Cancel</button>
                <button>Save</button>
            </DivStyled>

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
                    <input name="recordTagsListInProgress"
                           value={recordTagsListInProgress || ""}
                           onChange={event => setRecordTagsListInProgress(event.target.value)}
                           type="text"/>
                    <button type="button" onClick={handleTagKlickButton}>Add Tag</button>
                </SidebarSection4Styled>

            </SidebarStyled>

        </FormStyled>
    );

    function handleChange(event) {
        setRecordData({field: event.target.name, value: event.target.value});
        onChange(recordData)
    }

    function onCancel() {
        history.goBack();
    }

    function handleTagKlickButton() {
        setRecordData({...recordData, tagsList: [...recordData.tagsList, recordTagsListInProgress]});
        onAddTagKlick(recordData)
        setRecordTagsListInProgress("");

    }

    function handleSubmit(event) {
        event.preventDefault();
        onSave(recordData);
    }
}

const FormStyled = styled.form`
    display: grid;
    grid-template-columns: 1fr 0.5fr;
`;

const DivStyled = styled.div`
display: grid;
grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
`

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
grid-template-rows: 1fr 1fr 1fr;
`