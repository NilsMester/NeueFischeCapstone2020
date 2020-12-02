import React from 'react';
import {useHistory} from 'react-router-dom';
import styled from 'styled-components/macro';
import UserTagList from "../tags/UserTagList";
import PasteLinkFromClipboard from "../PasteLinkFromClipboard";
import InputField from "../UI/InputField";

export default function RecordForm({onSave, recordData, setRecordData}) {

    const history = useHistory();
    return (
        <FormStyled onSubmit={handleSubmit}>
            <label>
                Titel
                <InputField
                    titel
                    name="titel"
                    value={recordData.titel || ""}
                    onChange={handleChange}
                    type="text"/>
            </label>

            <LinkSectionStyled>
                <LinkLableStyled>
                    RecordLink
                    <InputField
                        recordLink
                        name="recordLink"
                        value={recordData.recordLink || ""}
                        onChange={handleChange}
                        type="text"/>
                </LinkLableStyled>
                <PasteLinkFromClipboard recordData={recordData} setRecordData={setRecordData} handleChange={handleChange}/>
            </LinkSectionStyled>

            <p>Tags</p>
            <UserTagList recordForm tags={recordData.tagList} onTagClick={tag => setRecordData({
                ...recordData,
                tagList: recordData.tagList.filter(existingTag => existingTag !== tag)
            })}/>

            <label>
                Description
                <InputField
                    description
                    name="description"
                    value={recordData.description || ""}
                    onChange={handleChange}
                    type="test"/>
            </label>

            <button type="button" onClick={onCancel}>Cancel</button>
            <button>Save</button>
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
    grid-template-rows: min-content min-content min-content 1fr 0.5fr min-content min-content;
    grid-row-gap: 12px;
`;

const LinkSectionStyled = styled.div`
display:grid ;
grid-template-rows: min-content;
grid-template-columns: 0.5fr 0.2fr 0.3fr;
justify-content: end;
padding: 0 10px 0 0;
`

const LinkLableStyled = styled.label`
`



