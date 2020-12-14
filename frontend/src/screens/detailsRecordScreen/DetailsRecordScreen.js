import React, { useContext, useEffect, useState } from 'react';
import RecordContext from '../../contexts/RecordContext';
import { useParams, useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import RecordDetails from '../../components/records/RecordDetails';
import SideBarActionButton from '../../components/UI/SideBarActionButton';
import TabBar from '../../components/UI/TabBar';
import styled from 'styled-components/macro';

export default function DetailsRecordScreen() {
    const { records, deleteRecord } = useContext(RecordContext);
    const history = useHistory();
    const { id } = useParams();
    const record = records.find((record) => record.id === id);
    const [recordData, setRecordData] = useState(record);

    useEffect(() => {
        setRecordData(record);
    }, [record]);

    if (!recordData) {
        return 'loading';
    }

    return (
        <>
            <Header titel="Your Record" showLogout={true} />
            <MainGridStyled>
                <ButtonGroup>
                    <SideBarActionButton
                        edit
                        showFirstSidebarArea={false}
                        onClick={() => history.push(`/edit/${recordData?.id}`)}
                    >
                        Edit
                    </SideBarActionButton>
                    <SideBarActionButton delete onClick={handleDelete}>
                        Delete
                    </SideBarActionButton>
                </ButtonGroup>
                <RecordDetails record={recordData} />
            </MainGridStyled>
            <TabBar tabbarswitch={'detail'} />
        </>
    );

    function handleDelete() {
        deleteRecord(id);
        history.goBack();
    }
}

const MainGridStyled = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: min-content min-content min-content min-content min-content;
    grid-template-areas:
        ' titel titel'
        'tags button'
        'description description'
        'preview preview'
        'interactions interactions';
    row-gap: 24px;
    position: relative;
    padding: 10px;
`;

const ButtonGroup = styled.div`
    position: relative;
    grid-area: button;
`;
