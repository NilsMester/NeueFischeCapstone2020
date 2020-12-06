import React, {useContext} from 'react';
import RecordContext from "../../contexts/RecordContext";
import {useParams, useHistory } from 'react-router-dom';
import Header from "../../components/Header";
import RecordDetails from "../../components/records/RecordDetails";
import SideBarActionButton from "../../components/UI/SideBarActionButton";
import TabBar from "../../components/UI/TabBar";
import styled from 'styled-components/macro';

export default function DetailsRecordScreen(){
    const{records, deleteRecord} = useContext(RecordContext);

    const {id} = useParams();
    const history = useHistory();

    const record = records.find((record) => record.id === id);

    return !record ? null : (
        <>
            <Header titel="Your Record"/>
            <MainGridStyled>
                <SideBarActionButton first showFirstSidebarArea={false}
                                     onClick={() => history.push(`/edit/${record.id}`)}>Edit</SideBarActionButton>
                <SideBarActionButton delete onClick={handleDelete}>Delete</SideBarActionButton>
                <RecordDetails record={record}/>
            </MainGridStyled>
            <TabBar/>
        </>
);

    function handleDelete() {
        deleteRecord(id);
        history.goBack();
    }

}

const MainGridStyled = styled.div`
display: grid;
grid-template-columns: 1fr min-content;
position: relative;
padding: 10px 0 10px 10px;
`