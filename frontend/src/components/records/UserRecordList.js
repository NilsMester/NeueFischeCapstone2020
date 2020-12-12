import React from 'react';
import styled from 'styled-components/macro';
import UserRecordItem from "./UserRecordItem";
import DetailsIcon from "../DetailsIcon";

export default function UserRecordList ({records,timeago , ...rest}) {

    return (
        <>
            {records.length === 0 ?
                <NoResearchResult>
                    <TitelStyled>No search results found!</TitelStyled>
                </NoResearchResult>
                :
                <StyledRecordsList {...rest}>
                    {records?.map((record) => (
                        <li key={record.id}>
                            <UserRecordItem timeago={timeago}
                                record={record}
                                actions={[
                                    <DetailsIcon key="details" record={record}/>
                                ]}
                            />
                        </li>
                    ))}
                </StyledRecordsList>}
        </>
    );

}

const StyledRecordsList = styled.ul`
    padding: 0;
    overflow: scroll;
    list-style: none;
    width: ${props => props.home ? `66vw` : `100vw`};
    display:grid;
    grid-area: recordsList;
    row-gap: 30px;
    grid-auto-rows: min-content;
    margin:0;
 
`;

const TitelStyled = styled.h2`
font-size: 1.5em;
margin: 0;
padding: 0 10px 0 0;
color: var(--grey-50);
text-align: center;
`

const NoResearchResult = styled.div `
width: 100vw;
height: 60vh;
display: grid;
grid-area: recordsList;
align-items: center;
`