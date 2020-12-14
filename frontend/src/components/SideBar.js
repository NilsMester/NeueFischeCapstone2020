import React from 'react';
import UserTagList from './tags/UserTagList';
import styled from 'styled-components/macro';
import InputField from './UI/InputField';

export default function SideBar({
    tags,
    searchTermTagsArray,
    onTagClick,
    searchTerm,
    setSearchTerm,
    showFirstSidebarArea,
    showSecondSideBarArea,
    actionsFirstButton = [],
    actionsSecondButton = [],
    actionsSecondButtonInGrid = [],
    actionsSecondArea = [],
    placeHolder = [],
}) {
    return (
        <SidebarStyled>
            {placeHolder}
            <div>{actionsFirstButton}</div>

            {!showFirstSidebarArea && !showSecondSideBarArea ? (
                <div>{actionsSecondButton}</div>
            ) : showFirstSidebarArea ? (
                <>
                    <ButtonArea />
                    <SidebarSection1Styled>
                        <UserTagList
                            sidebar
                            tags={tags}
                            searchTermTagsArray={searchTermTagsArray}
                            onTagClick={onTagClick}
                        />
                        <LabelStyled>
                            <InputField
                                search
                                placeholder="search"
                                name="search"
                                value={searchTerm || ''}
                                onChange={(event) =>
                                    setSearchTerm(event.target.value)
                                }
                                type="text"
                            />
                        </LabelStyled>
                        {actionsSecondButtonInGrid}
                    </SidebarSection1Styled>
                </>
            ) : showSecondSideBarArea ? (
                <>
                    {actionsSecondButton}
                    <ButtonArea />
                    <SidebarSection2Styled>
                        {actionsSecondArea}
                    </SidebarSection2Styled>
                </>
            ) : null}
        </SidebarStyled>
    );
}

const ButtonArea = styled.div`
    height: 40px;
`;

const LabelStyled = styled.label`
    margin: 0;
    position: relative;
    width: 120px;
    font-size: 0.8em;
    color: var(--grey-50);
`;

const SidebarStyled = styled.div`
    position: relative;
`;

const SidebarSection1Styled = styled.div`
    padding: 4px 0 0 0;
    display: grid;
    grid-area: tagsListbar;
    row-gap: 8px;
    justify-items: end;
`;

const SidebarSection2Styled = styled.div`
    position: relative;
    display: grid;
    grid-area: addTagField;
    row-gap: 8px;
    justify-items: end;
    padding: 65px 0 0 0;
`;
