import React from 'react';
import {useHistory} from 'react-router-dom';
import styled from 'styled-components/macro';
import UserTagList from "../tags/UserTagList";
import PasteLinkFromClipboard from "../PasteLinkFromClipboard";

export default function RecordForm({onSave, recordData, setRecordData}) {

    const history = useHistory();
    return (
        <FormStyled onSubmit={handleSubmit}>
            <DivStyled>
                <label>
                    Titel
                    <input name="titel"
                           value={recordData.titel || ""}
                           onChange={handleChange}
                           type="text"/>
                </label>

                <div>
                    <label>
                        RecordLink
                        <input name="recordLink"
                               value={recordData.recordLink || ""}
                               onChange={handleChange}
                               type="text"/>
                    </label>
                    <PasteLinkFromClipboard recordData={recordData} setRecordData={setRecordData} handleChange={handleChange} />
                </div>

                <p>Tags</p>
                <UserTagList recordForm tags={recordData.tagList} onTagClick={tag=>setRecordData({...recordData, tagList: recordData.tagList.filter(existingTag=> existingTag!==tag)})}/>

                <label>
                    Description
                    <input name="description"
                           value={recordData.description || ""}
                           onChange={handleChange}
                           type="test"/>
                </label>

                <button type="button" onClick={onCancel}>Cancel</button>
                <button>Save</button>
            </DivStyled>
        </FormStyled>
    );

    function handleChange(event) {
        setRecordData({...recordData, [event.target.name]: event.target.value});
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
grid-template-rows: min-content min-content min-content 1fr 0.5fr min-content min-content;
`

