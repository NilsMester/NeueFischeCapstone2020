import React, {useEffect, useState} from 'react';
import styled from 'styled-components/macro';
import UserTagList from "../tags/UserTagList";
import PasteLinkFromClipboard from "../PasteLinkFromClipboard";
import InputField from "../UI/InputField";
import {ReactTinyLink} from "react-tiny-link";

export default function RecordForm({recordData, setRecordData}) {

    const [recordLinkIsValid, setRecordLinkIsValid] = useState(false)

    useEffect(()=>{
        if (recordData.recordLink === "" || recordData.recordLink.includes("https://" || "www.")){
            setRecordLinkIsValid(true)}
            else{
            setRecordLinkIsValid(false);
        }
    }, [recordData.recordLink, recordData, setRecordData])

    return (
        <>
            <LinkSectionStyled>
                <LinkLableStyled>
                    <InputField
                        formField
                        name="recordLink"
                        placeholder="Link"
                        value={recordData.recordLink || ""}
                        onChange={handleChange}
                        type="text"/>
                </LinkLableStyled>
                <PasteLinkFromClipboard recordData={recordData} setRecordData={setRecordData}
                                        handleChange={handleChange}/>
            </LinkSectionStyled>

            <TagsSectionStyled>
                <TagsSubTitelStaled>Tags</TagsSubTitelStaled>
                <UserTagList formTags tags={recordData.tagList} onTagClick={tag => setRecordData({
                    ...recordData,
                    tagList: recordData.tagList.filter(existingTag => existingTag !== tag)
                })}/>
            </TagsSectionStyled>

            <TitelLableStyled>
                <InputField
                    formField
                    placeholder="Titel"
                    name="titel"
                    value={recordData.titel || ""}
                    onChange={handleChange}
                    type="text"/>
            </TitelLableStyled>

            <LableStyled>
                <DescriptionTextAreaStyled
                    description
                    placeholder="Description"
                    name="description"
                    value={recordData.description || ""}
                    onChange={handleChange}
                    type="test"/>
            </LableStyled>

            {recordLinkIsValid ?
            <PreviewStyled>
                <CheckForLink/>
            </PreviewStyled>:
                <PreviewStyled>
                    <h3>Invalid Url!</h3>
                </PreviewStyled>}
        </>
    );

    function handleChange(event) {
        setRecordData({...recordData, [event.target.name]: event.target.value});
    }

    function CheckForLink() {
        if (recordData.recordLink !== "" && recordData.recordLink.includes("https://" || "www.")){
            return (
                <ReactTinyLink
                    cardSize="small"
                    showGraphic={true}
                    maxLine={2}
                    minLine={2}
                    url={recordData.recordLink}
                />)}
        return null;
    }

}

const LinkSectionStyled = styled.div`
display: grid ;
grid-template-columns: 1fr 0.25fr;
align-items: center;
grid-area: link;
gap: 8px;
padding: 0 10px 0 0;
`

const PreviewStyled = styled.div`
display: grid;
text-align: center;
grid-area: preview;
margin: 0 10px 0 0;
`
const LinkLableStyled = styled.label`
width: 100%;
row-gap: 8px;
`

const TagsSubTitelStaled = styled.p`
margin: 0;
`

const LableStyled = styled.label`
display: grid;
grid-area: description;
row-gap: 8px;
margin: 0 10px 0 0;
`

const TitelLableStyled = styled.label`
display: grid;
grid-area: titel;
row-gap: 8px;
margin: 0 10px 0 0;
`

const TagsSectionStyled = styled.section`
grid-area: tags;
height: 26vh;
`

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


`



