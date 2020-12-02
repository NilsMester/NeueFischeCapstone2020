import React from 'react';
import styled from 'styled-components/macro';
import UserTagList from "../tags/UserTagList";
import PasteLinkFromClipboard from "../PasteLinkFromClipboard";
import InputField from "../UI/InputField";
import {ReactTinyLink} from "react-tiny-link";

export default function RecordForm({recordData, setRecordData}) {
console.log(recordData.recordLink)
    return (
            <>
            <LinkSectionStyled>
                <section>
                    RecordLink
                    <InputField
                        recordLink
                        name="recordLink"
                        value={recordData.recordLink || ""}
                        onChange={handleChange}
                        type="text"/>
                </section>
                <PasteLinkFromClipboard recordData={recordData} setRecordData={setRecordData} handleChange={handleChange}/>
            </LinkSectionStyled>

                <TagsSectionStyled>
            <p>Tags</p>
            <UserTagList formTags tags={recordData.tagList} onTagClick={tag => setRecordData({
                ...recordData,
                tagList: recordData.tagList.filter(existingTag => existingTag !== tag)
            })}/>
                </TagsSectionStyled>

                <LableStyled>
                    Titel
                    <InputField
                        titel
                        name="titel"
                        value={recordData.titel || ""}
                        onChange={handleChange}
                        type="text"/>
                </LableStyled>

                <PreviewStyled>
                <CheckForLink />
                </PreviewStyled>

            <LableStyled>
                Description
                <DescriptionTextAreaStyled
                    description
                    name="description"
                    value={recordData.description || ""}
                    onChange={handleChange}
                    type="test"/>
            </LableStyled>
        </>
    );

    function handleChange(event) {
        setRecordData({...recordData, [event.target.name]: event.target.value});
    }
    
    function CheckForLink(){
        if (recordData.recordLink !== ""){
            return(
            <ReactTinyLink
                cardSize="small"
                showGraphic={true}
                maxLine={0}
                minLine={0}
                url={recordData.recordLink}
            />)} return null }

}



const LinkSectionStyled = styled.div`
display:grid ;
grid-template-rows: min-content;
grid-template-columns: 0.5fr 0.5fr;
padding: 0 5px 0 0;
`

const PreviewStyled = styled.div`
margin: 0 10px 0 0;

`

const LableStyled = styled.label`
margin: 0 10px 0 0;
`

const TagsSectionStyled = styled.section`
p{margin: 0}
`

const DescriptionTextAreaStyled = styled.textarea`
display: block;
  background-color: var(--grey-50);
  padding: var(--size-s);
  color: var(--white1);
  border-radius: var(--size-s);
  border-width: thin;
  border-style: solid;
  border-color: lightgrey;
  width: 100%;
  height: 60px;
  font-size: 0.8em;
  
  :focus {
    outline: none;
}


`



