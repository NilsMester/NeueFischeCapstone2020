import React from 'react';
import TagList from '../tags/TagList';
import styled from 'styled-components/macro';
import InputField from '../UI/InputField';

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
        <SideBarStyled>
            {placeHolder}
            <div>{actionsFirstButton}</div>

            {!showFirstSidebarArea && !showSecondSideBarArea ? (
                <div>{actionsSecondButton}</div>
            ) : showFirstSidebarArea ? (
                <>
                    <ButtonArea />
                    <TagsSection>
                        <TagList
                            sidebar
                            tags={tags}
                            searchTermTagsArray={searchTermTagsArray}
                            onTagClick={onTagClick}
                        />
                        <TagSearchLabel>
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
                        </TagSearchLabel>
                        {actionsSecondButtonInGrid}
                    </TagsSection>
                </>
            ) : showSecondSideBarArea ? (
                <>
                    {actionsSecondButton}
                    <ButtonArea />
                    <RecordTextSearchSection>
                        {actionsSecondArea}
                    </RecordTextSearchSection>
                </>
            ) : null}
        </SideBarStyled>
    );
}

const ButtonArea = styled.div`
    height: 40px;
`;

const TagSearchLabel = styled.label`
    margin: 0;
    position: relative;
    width: 120px;
    font-size: 0.8em;
    color: var(--grey-50);
`;

const SideBarStyled = styled.div`
    position: relative;
`;

const TagsSection = styled.section`
    padding: 4px 0 0 0;
    display: grid;
    grid-area: tagsListbar;
    row-gap: 8px;
    justify-items: end;
`;

const RecordTextSearchSection = styled.section`
    position: relative;
    display: grid;
    grid-area: addTagField;
    row-gap: 8px;
    font-size: 0.8em;
    justify-items: end;
    padding: 65px 0 0 0;
`;
