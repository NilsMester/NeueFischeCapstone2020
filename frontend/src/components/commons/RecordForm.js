import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import UserTagList from '../tags/UserTagList';
import PasteLinkFromClipboard from '../UI/PasteLinkFromClipboard';
import InputField from '../UI/InputField';
import LinkPreview from './LinkPreview';

export default function RecordForm({ recordData, setRecordData }) {
    const [recordLinkIsValid, setRecordLinkIsValid] = useState(false);

    useEffect(() => {
        if (
            recordData.recordLink === '' ||
            recordData.recordLink.includes('https://' || 'www.')
        ) {
            setRecordLinkIsValid(true);
        } else {
            setRecordLinkIsValid(false);
        }
    }, [recordData.recordLink]);

    return (
        <>
            <LinkSectionStyled>
                <LinkLableStyled>
                    <InputField
                        formField
                        name="recordLink"
                        placeholder="Link"
                        value={recordData.recordLink || ''}
                        onChange={handleChange}
                        type="text"
                    />
                </LinkLableStyled>
                <PasteLinkFromClipboard
                    recordData={recordData}
                    setRecordData={setRecordData}
                    handleChange={handleChange}
                />
            </LinkSectionStyled>

            <TagsSectionStyled>
                <TagsSubTitelStaled>Tags</TagsSubTitelStaled>
                <UserTagList
                    formTags
                    tags={recordData.tagList}
                    onTagClick={(tag) =>
                        setRecordData({
                            ...recordData,
                            tagList: recordData.tagList.filter(
                                (existingTag) => existingTag !== tag
                            ),
                        })
                    }
                />
            </TagsSectionStyled>

            <TitelLableStyled>
                <InputField
                    formField
                    placeholder="Titel"
                    name="titel"
                    value={recordData.titel || ''}
                    onChange={handleChange}
                    type="text"
                />
            </TitelLableStyled>

            <LableStyled>
                <DescriptionTextAreaStyled
                    description
                    placeholder="Description"
                    name="description"
                    value={recordData.description || ''}
                    onChange={handleChange}
                    type="test"
                />
            </LableStyled>

            <LinkPreview
                link={recordData.recordLink}
                recordLinkIsValid={recordLinkIsValid}
            />
        </>
    );

    function handleChange(event) {
        setRecordData({
            ...recordData,
            [event.target.name]: event.target.value,
        });
    }
}

const LinkSectionStyled = styled.div`
    display: grid;
    grid-template-columns: 1fr 0.25fr;
    align-items: center;
    grid-area: 1 / 1 / 1/ 3;
    gap: 8px;
    padding: 0 10px 0 0;
`;

const LinkLableStyled = styled.label`
    width: 100%;
    row-gap: 8px;
`;

const TagsSubTitelStaled = styled.p`
    margin: 0;
`;

const LableStyled = styled.label`
    display: grid;
    grid-area: description;
    row-gap: 8px;
    margin: 0 10px 0 0;
`;

const TitelLableStyled = styled.label`
    display: grid;
    grid-area: titel;
    row-gap: 8px;
    margin: 0 10px 0 0;
`;

const TagsSectionStyled = styled.section`
    grid-area: tags;
    height: 26vh;
`;

const DescriptionTextAreaStyled = styled.textarea`
    display: block;
    background-color: var(--grey-25);
    padding: 6px;
    color: var(--grey-main);
    border-radius: var(--size-s);
    border-width: thin;
    border-style: solid;
    border-color: lightgrey;
    width: 100%;
    height: 78px;
    font-size: 0.8em;
    box-shadow: 0 1px 5px 1px var(--grey-25);
    :focus {
        outline: none;
    }
`;
