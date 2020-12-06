import React from 'react';
import UserTagList from "../tags/UserTagList";
import styled from 'styled-components/macro';
import InputField from "../UI/InputField";

export default function SideBarForm({ tags, onTagClick, searchTerm, setSearchTerm, showFirstSidebarArea, showSecondSideBarArea, actionsFirstButton=[], actionsSecondButton=[], actionsSecondButtonInGrid=[], actionsSecondArea=[]}){

    return(
        <SidebarStyled>
            <div>{actionsFirstButton}</div>

            {!showFirstSidebarArea && !showSecondSideBarArea ?
                <div>{actionsSecondButton}</div>

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
                        {actionsSecondButtonInGrid}
                    </SidebarSection1Styled>

                    : showSecondSideBarArea ?
                        <>
                            {actionsSecondButton}
                            <SidebarSection2Styled>
                                {actionsSecondArea}
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



