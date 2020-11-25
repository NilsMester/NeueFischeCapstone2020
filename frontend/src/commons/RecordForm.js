import React, {useContext, useReducer, useState} from 'react';
import {useHistory} from 'react-router-dom';
import RecordTagsList from "./RecordTagsList";
import {RecordFormDataContext} from "../pages/addRecordPage/AddRecordPage";
import styled from 'styled-components/macro';

export default function RecordForm({onSave,onChange, onAddTagKlick}) {

    const {recordData, setRecordData} = useContext(RecordFormDataContext)
    const {titel, recordLink, description} = recordData

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

        </FormStyled>
    );

    function handleChange(event) {
        setRecordData({field: event.target.name, value: event.target.value});
        onChange(recordData)
    }

    function onCancel() {
        history.goBack();
    }

    function handleSubmit(event) {
        event.preventDefault();
        onSave(recordData);
    }
}

const FormStyled = styled.form`
    display: grid;

`;

const DivStyled = styled.div`
display: grid;
grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
`

