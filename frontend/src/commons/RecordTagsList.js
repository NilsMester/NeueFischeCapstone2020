import RecordTagsListItem from "./RecordTagsListItem";
import React from "react";

export default function RecordTagsList({tagsList}) {
    return (
        <ul>
            {tagsList?.map((recordTagItem, i) => (
                <RecordTagsListItem key={i} recordTagItem={recordTagItem}/>
                )
            )}
        </ul>
    )
}