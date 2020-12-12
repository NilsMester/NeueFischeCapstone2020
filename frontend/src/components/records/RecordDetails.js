import React from 'react'
import styled from 'styled-components/macro';
import UserTagList from "../tags/UserTagList";
import CopyLinkToClipboard from "../CopyLinkToClipboard";
import OpenLink from "../OpenLink";
import {ReactTinyLink} from "react-tiny-link";
// import TimeAgo from "react-timeago/lib";

export default function Record({record}) {

    return (
        <>

            <TitelStyled>{record.titel}</TitelStyled>

            <TagsSectionStyled>
                <TagsSubTitelStaled>Tags</TagsSubTitelStaled>
            <UserTagList formTags tags={record.tagList}/>
            </TagsSectionStyled>
            <TextStyled>{record.description}</TextStyled>
            <PreviewStyled>
            <ReactTinyLink
                cardSize="small"
                showGraphic={true}
                maxLine={2}
                minLine={2}
                url={record.recordLink}
            />
                {/*<CreationDate><p><TimeAgo date={record.timestamp}/></p></CreationDate>*/}
            </PreviewStyled>
            <ActionSection>
                <OpenLink recordLink={record.recordLink}/>
                <CopyLinkToClipboard recordLink={record.recordLink} />
            </ActionSection>
        </>
    )

}


const ActionSection = styled.section`
display: grid;
grid-template-columns: 0.5fr 0.5fr;
height: 35px;
justify-content: center;
align-items: center;
grid-area: interactions;
`

const TitelStyled = styled.h2`
font-family: 'Orbitron', sans-serif;
margin: 0;
height: 40px;
color: var(--grey-50);
text-align: center;
object-fit: scale-down;
font-size: 1.25em;
grid-area: titel;
`

const TextStyled = styled.p`
margin: 0;
color: var(--grey-50);
`

const TagsSectionStyled = styled.section`
grid-area: tags;
height: 26vh;
`

const TagsSubTitelStaled = styled.p`
margin: 0;
`
const PreviewStyled = styled.div`
display: grid;
text-align: center;
grid-area: preview;
margin: 0 10px 0 0;
`
// const CreationDate = styled.aside`
// justify-self: right;
//
// p{
// font-size: var(--size-m);
// justify-self: right;
// text-align: right;
// }`
//
