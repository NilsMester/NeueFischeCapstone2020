import React from 'react';
import styled from 'styled-components/macro';
import { ReactTinyLink } from 'react-tiny-link';

export default function LinkPreview({ link, recordLinkIsValid }) {
    return (
        <>
            {recordLinkIsValid ? (
                <PreviewStyled>
                    <CheckForLink link={link} />
                </PreviewStyled>
            ) : (
                <PreviewStyled>
                    <h3>Invalid Url!</h3>
                </PreviewStyled>
            )}
        </>
    );
}
function CheckForLink({ link }) {
    if (link !== '' && link.includes('https://' || 'www.')) {
        return (
            <ReactTinyLink
                cardSize="small"
                showGraphic={true}
                maxLine={2}
                minLine={2}
                url={link}
            />
        );
    }
    return null;
}

const PreviewStyled = styled.div`
    display: grid;
    text-align: center;
    grid-area: preview;
    margin: 0 10px 0 0;
`;
