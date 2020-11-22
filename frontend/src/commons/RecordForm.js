import React, {useContext, useState} from 'react';
import {useHistory} from 'react-router-dom';
import RecordContext from "../contexts/RecordContext";

const initialState = {
    recordLink: '',
    tagsList: [],
    description: '',
    publicStatus: true,
}

export default function RecordForm({onSave, record = initialState}) {
    const{userTagsList} = useContext(RecordContext)
    const [recordData, setRecordData] = useState(record);
    const [tag, setTag] = useState("");
    const history = useHistory();

    return(
        <form onSubmit={handleSubmit}>

            <label>
                Titel
                <input name="titel"
                       value={recordData.titel || ""}
                       onChange={handleChange}
                       type="text"/>
            </label>

            <label>
                RecordLink
                <input name="recordLink"
                       value={recordData.recordLink || ""}
                       onChange={handleChange}
                       type="text"/>
            </label>

            <TagList/>

            <label>
                Tags
                <input name="newTag"
                       value={tag || ""}
                       onChange={event => setTag(event.target.value)}
                       type="text"/>
            </label>
            <button type="button" onClick={handleTagKlick}>Add Tag</button>

            <label>
                Description
                <input name="description"
                       value={recordData.description || ""}
                       onChange={handleChange}
                       type="test"/>
            </label>

            <button type="button" onClick={onCancel}>Cancel</button>
            <button>Save</button>

            <UserTagsList/>
        </form>

    );

    function handleChange(event) {
        setRecordData({...recordData, [event.target.name]: event.target.value});
    }

    function onCancel() {
        history.goBack();
    }

    function handleTagKlick(){
        setRecordData({...recordData, tagsList: [...recordData.tagsList, tag]});
        setTag("");
    }

    function handleSubmit(event) {
        event.preventDefault();
        onSave(recordData);
    }

function TagList() {
    return (
        <ul>
            {recordData.tagsList?.map((tag, i) => (
                    <li key={i} className="tag">
                        {tag}
                    </li>
                )
            )}
        </ul>
    )

}

    function UserTagsList() {
        return (
            <ul>
                {userTagsList?.map((userTag, i) => (
                        <li key={i} className="tag">
                            {userTag}
                        </li>
                    )
                )}
            </ul>
        )

    }

}