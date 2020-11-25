import RecordTagsListItem from "./RecordTagsListItem";
import React from "react";

export default function RecordTagsList({tagsList}) {
    return (
        <ul>
            {tagsList?.map((recordTagItem, index) => (
                <RecordTagsListItem key={index} recordTagItem={recordTagItem}/>
                )
            )}
        </ul>
    )
}