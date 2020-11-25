import RecordTagsListItem from "./RecordTagsListItem";
import React, {useContext} from "react";
import {RecordFormDataContext} from "../pages/addRecordPage/AddRecordPage";

export default function RecordTagsList() {
    const {recordData} = useContext(RecordFormDataContext)
    return (
        <ul>
            {recordData.tagsList?.map((recordTagItem, index) => (
                <RecordTagsListItem key={index} recordTagItem={recordTagItem}/>
                )
            )}
        </ul>
    )
}