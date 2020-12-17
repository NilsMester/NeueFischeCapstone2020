import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import TagList from '../tags/TagList';
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
            <LinkSection>
                <LinkLabel>
                    <InputField
                        formField
                        name="recordLink"
                        placeholder="Link"
                        value={recordData.recordLink || ''}
                        onChange={handleChange}
                        type="text"
                    />
                </LinkLabel>
                <PasteLinkFromClipboard
                    recordData={recordData}
                    setRecordData={setRecordData}
                    handleChange={handleChange}
                />
            </LinkSection>

            <TagsSection>
                <TagsSubTitel>Tags</TagsSubTitel>
                <TagList
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
            </TagsSection>

            <TitelLabel>
                <InputField
                    formField
                    name="titel"
                    placeholder="Titel"
                    value={recordData.titel || ''}
                    onChange={handleChange}
                    type="text"
                />
            </TitelLabel>

            <DescriptionLabel>
                <DescriptionTextArea
                    description
                    placeholder="Description"
                    name="description"
                    value={recordData.description || ''}
                    onChange={handleChange}
                    type="test"
                />
            </DescriptionLabel>

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

const LinkSection = styled.div`
    display: grid;
    grid-template-columns: 1fr 0.25fr;
    align-items: center;
    grid-area: 1 / 1 / 1/ 3;
    gap: 8px;
    padding: 0 10px 0 0;
`;

const LinkLabel = styled.label`
    width: 100%;
`;

const TagsSubTitel = styled.p`
    margin: 0;
`;

const DescriptionLabel = styled.label`
    grid-area: description;
    margin: 0 10px 0 0;
`;

const TitelLabel = styled.label`
    grid-area: titel;
    margin: 0 10px 0 0;
`;

const TagsSection = styled.section`
    grid-area: tags;
    height: 26vh;
`;

/*const TitelTextArea = styled.textarea`
    background-color: var(--grey-25);
    padding: 6px;
    color: var(--grey-main);
    border-radius: var(--size-s);
    border-width: thin;
    border-style: solid;
    border-color: lightgrey;
    width: 100%;
    font-size: 0.8em;
    box-shadow: 0 1px 5px 1px var(--grey-25);
    :focus {
        outline: none;
    }
`;*/

const DescriptionTextArea = styled.textarea`
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
