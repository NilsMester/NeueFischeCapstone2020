import React, {useState} from 'react';
import UserTagList from "../tags/UserTagList";
import styled from 'styled-components/macro';
import AddNewTagInput from "../tags/AddNewTagInput";
import SideBarActionButton from "../UI/SideBarActionButton";
import InputField from "../UI/InputField";

export default function SideBarForm({ tags, onTagClick, searchTerm, setSearchTerm,recordData, setRecordData}){

    const [showFirstSidebarArea, setShowFirstSidebarArea] = useState(false)
    const [showSecondSideBarArea, setShowSecondSideBarArea] = useState(false)

    function handleClickFirstButton(){
        setShowFirstSidebarArea(!showFirstSidebarArea)
        setShowSecondSideBarArea(false)
    }

    function handleClickSecondButton(){
        setShowFirstSidebarArea(false)
        setShowSecondSideBarArea(!showSecondSideBarArea)
    }

    return(
        <SidebarStyled>
            <SideBarActionButton first showFirstSidebarArea={showFirstSidebarArea} onClick={handleClickFirstButton}>Tags</SideBarActionButton>

            {showFirstSidebarArea ?
                <SidebarSection1Styled>
                    <UserTagList sidebar tags={tags} onTagClick={onTagClick}/>
                    <LabelStyled> Search Tag
                        <InputField
                            search
                            name="search"
                            value={searchTerm || ""}
                            onChange={(event) => setSearchTerm(event.target.value)}
                            type="text"/>
                    </LabelStyled>
                </SidebarSection1Styled>
                : null}

            <SideBarActionButton second showFirstSidebarArea={showFirstSidebarArea} onClick={handleClickSecondButton}>New
                Tag</SideBarActionButton>

            {showSecondSideBarArea ?
                <SidebarSection2Styled>
                    <AddNewTagInput recordData={recordData} setRecordData={setRecordData}/>
                </SidebarSection2Styled>
                : null}

        </SidebarStyled>
    )

}


const LabelStyled = styled.label`
position: relative;
padding: 0 4px;
font-size: 0.8em;
color: var(--grey-main);
`

const SidebarStyled = styled.div`
position: relative;
`

const SidebarSection1Styled = styled.div`
position: relative;
top: 12%;
`

const SidebarSection2Styled = styled.div`
position: relative;
top: 32%;
`



