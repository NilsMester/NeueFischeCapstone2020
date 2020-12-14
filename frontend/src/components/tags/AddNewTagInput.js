import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import InputField from '../UI/InputField';
import { RiAddCircleFill } from 'react-icons/ri';

export default function AddNewTagInput({ recordData, setRecordData }) {
    const [addNewTag, setAddNewTag] = useState('');
    const [disableButton, setDisableButton] = useState(true);

    useEffect(() => {
        if (addNewTag !== '') {
            setDisableButton(false);
        } else {
            setDisableButton(true);
        }
    }, [addNewTag, setDisableButton]);

    return (
        <SidebarSection4Styled>
            <InputField
                search
                name="addNewTag"
                placeholder="Add new Tag"
                value={addNewTag || ''}
                onChange={(event) => setAddNewTag(event.target.value)}
                type="text"
            />
            <NewTagButton
                type="button"
                disabled={disableButton}
                onClick={handleTagKlickButton}
            >
                <AddTagIcon />
            </NewTagButton>
        </SidebarSection4Styled>
    );

    function handleTagKlickButton() {
        setRecordData({
            ...recordData,
            tagList: [...recordData.tagList, addNewTag],
        });
        setAddNewTag('');
    }
}

const SidebarSection4Styled = styled.label`
    display: grid;
    align-content: center;
    justify-items: center;
`;

const AddTagIcon = styled(RiAddCircleFill)`
    height: 30px;
    width: 30px;
    color: var(--orange-75);
`;

const NewTagButton = styled.button`
    padding: 0;
    position: relative;
    top: -8px;
    background-color: unset;
    border-style: none;
    &:disabled {
        cursor: not-allowed;
    }
`;
