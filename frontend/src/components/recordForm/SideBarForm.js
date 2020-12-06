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

            {!showFirstSidebarArea && !showSecondSideBarArea ?
                <SideBarActionButton second showFirstSidebarArea={showFirstSidebarArea} onClick={handleClickSecondButton}>
                    New Tag
                </SideBarActionButton>

                : showFirstSidebarArea ?
                    <SidebarSection1Styled>
                        <UserTagList sidebar tags={tags} onTagClick={onTagClick}/>
                        <LabelStyled>
                            <InputField search
                                        placeholder="search"
                                        name="search"
                                        value={searchTerm || ""}
                                        onChange={(event) => setSearchTerm(event.target.value)}
                                        type="text"/>
                        </LabelStyled>
                        <SideBarActionButton showFirstSidebarArea={showFirstSidebarArea}
                                             onClick={handleClickSecondButton}>
                            New Tag
                        </SideBarActionButton>
                    </SidebarSection1Styled>

                    : showSecondSideBarArea ?
                        <>
                            <SideBarActionButton second showFirstSidebarArea={showFirstSidebarArea}
                                                 onClick={handleClickSecondButton}>
                                New Tag
                            </SideBarActionButton>
                            <SidebarSection2Styled>
                                <AddNewTagInput recordData={recordData} setRecordData={setRecordData}/>
                            </SidebarSection2Styled></>
                        : null}

        </SidebarStyled>
    )

}

const LabelStyled = styled.label`
margin: 0;
position: relative;
width: 120px;
font-size: 0.8em;
color: var(--grey-50);
`

const SidebarStyled = styled.div`
position: relative;
grid-area: sidebar;
`

const SidebarSection1Styled = styled.div`
padding: 4px 0 0 0;
position: relative;
top: 13%;
display: grid;
row-gap: 8px;
justify-items: end;
`

const SidebarSection2Styled = styled.div`
position: relative;
top: 30%;
display: grid;
row-gap: 8px;
justify-items: end;
padding: 8px 0 0 0;
`



