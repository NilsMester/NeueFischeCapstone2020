import React from 'react';
import styled from 'styled-components/macro';
import InputField from "./UI/InputField";

export default function SearchRecordInput({searchTermText, setSearchTermText}){

    return (
        <SidebarSection4Styled>
            <InputField search
                        name="searchTermText"
                        placeholder="Search Record"
                        value={searchTermText || ""}
                        onChange={event => setSearchTermText(event.target.value)}
                        type="text"/>
        </SidebarSection4Styled>
    )

}

const SidebarSection4Styled = styled.label`
display: grid;
align-content: center;
justify-items: center
`


