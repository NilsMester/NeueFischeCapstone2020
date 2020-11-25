import RecordTagsListItem from "./RecordTagsListItem";
import React, {useContext} from "react";
import {RecordFormDataContext} from "../pages/addRecordPage/AddRecordPage";
import styled from 'styled-components/macro';

export default function RecordTagsList() {
    const {recordData} = useContext(RecordFormDataContext)
    return (
        <StyledTagsList>
            {recordData.tagsList?.map((recordTagItem, index) => (
                <RecordTagsListItem key={index} recordTagItem={recordTagItem}/>
                )
            )}
        </StyledTagsList>
    )
}

const StyledTagsList = styled.ul `
list-style: none;
display: inline;
float: left;
padding: 0;
margin: 0;
    `;