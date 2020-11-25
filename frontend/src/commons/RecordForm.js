import React, {useReducer, useState} from 'react';
import {useHistory} from 'react-router-dom';
import styled from 'styled-components/macro';
import UserTagList from "./UserTagList";
import SideBarActionButton from "./SideBarActionButton";
import RecordTagsList from "./RecordTagsList";

const initialState = {
    titel:"",
    recordLink: '',
    tagsList: [],
    description: '',
    publicStatus: true,
}

function reducer(state, {field,value}){
    return {...state, [field]:value}
}

export default function RecordForm({onSave,onChange, onAddTagKlick, recordOnChange = initialState}) {
    const [recordTagsListInProgress, setRecordTagsListInProgress] = useState(recordOnChange.tagsList)
    const history = useHistory();

    const[state, dispatch] = useReducer(reducer, recordOnChange)

    const {titel, recordLink, tagsList, description} = state

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
                <RecordTagsList tagsList={tagsList}/>

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
                           onChange={event => setRecordTagsListInProgress([event.target.value])}
                           type="text"/>
                    <button type="button" onClick={handleTagLickButton}>Add Tag</button>
                </SidebarSection4Styled>

            </SidebarStyled>

        </FormStyled>
    );

    function handleChange(event) {
        dispatch({field: event.target.name, value: event.target.value});
        onChange(state)
    }

    function onCancel() {
        history.goBack();
    }

    function handleTagLickButton() {
        dispatch({...state, tagsList: [...state.tagsList, recordTagsListInProgress]});
        onAddTagKlick(state);
        setRecordTagsListInProgress("");
    }

    function handleSubmit(event) {
        event.preventDefault();
        onSave(state);
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