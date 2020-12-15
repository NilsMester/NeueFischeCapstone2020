import React from 'react';
import styled from 'styled-components/macro';
import { useHistory } from 'react-router-dom';
import { IoChevronBackSharp } from 'react-icons/io5';
import { RiAddCircleFill } from 'react-icons/ri';
import { AiOutlineSave, AiOutlineHome } from 'react-icons/ai';
import ListIcon from '../UI/ListIcon';
import ResetFilterIcon from '../UI/ResetFilterIcon';
import LoginIcon from '../UI/LoginIcon';

export default function TabBar({
    onSave,
    recordData,
    buttonisactive,
    tabbarswitch,
    handleLogin,
    onClickDeleteFilter,
    ...rest
}) {
    const history = useHistory();

    return (
        <ActionBarStyled {...rest}>
            {tabbarswitch === 'login' ? (
                <>
                    <TabButton onClick={handleLogin}>
                        <LoginIcon />
                    </TabButton>
                </>
            ) : tabbarswitch === 'home' ? (
                <>
                    <TabButton onClick={() => history.push(`/records`)}>
                        <ListIcon />
                    </TabButton>
                    <TabButton onClick={() => history.push(`/newRecord`)}>
                        <NewRecordButton />
                    </TabButton>
                </>
            ) : tabbarswitch === 'form' ? (
                <>
                    <TabButton onClick={() => history.goBack()}>
                        <HistoryGoBackButton />
                    </TabButton>
                    <TabButton
                        onClick={handleSubmit}
                        buttonisactive={buttonisactive}
                        disabled={!buttonisactive}
                    >
                        <SafeButton />
                    </TabButton>
                </>
            ) : tabbarswitch === 'list' ? (
                <>
                    <TabButton onClick={() => history.goBack()}>
                        <HistoryGoBackButton />
                    </TabButton>
                    <TabButton onClick={() => history.push(`/newRecord`)}>
                        <NewRecordButton />
                    </TabButton>
                    <TabButton
                        buttonisactive={buttonisactive}
                        onClick={onClickDeleteFilter}
                    >
                        <ResetFilterIcon />
                    </TabButton>
                </>
            ) : tabbarswitch === 'detail' ? (
                <>
                    <TabButton onClick={() => history.goBack()}>
                        <HistoryGoBackButton />
                    </TabButton>
                    <TabButton onClick={() => history.push(`/newRecord`)}>
                        <NewRecordButton />
                    </TabButton>
                    <TabButton onClick={() => history.push(`/home`)}>
                        <HomeButton />
                    </TabButton>
                </>
            ) : null}
        </ActionBarStyled>
    );

    function handleSubmit(event) {
        event.preventDefault();
        onSave(recordData);
    }
}
const ActionBarStyled = styled.section`
    display: grid;
    align-items: end;
    grid-template-columns: ${(props) =>
        props.tabbarcolumns === 'oneButton'
            ? `1fr`
            : props.tabbarcolumns === 'twoButton'
            ? ` 1fr 1fr`
            : `0.5fr 0.5fr 0.5fr`};
    background: linear-gradient(
        to bottom,
        #d4d4d4,
        #9a9a9a,
        #868686,
        #737373,
        var(--grey-50),
        var(--grey-50)
    );
`;

const TabButton = styled.button`
    width: auto;
    height: 45px;
    border-radius: 30% 30% 0 0;
    color: ${(props) =>
        props.buttonisactive ? `var(--secondary1)` : `var(--grey-25)`};
    &:disabled {
        cursor: not-allowed;
    }
    border-color: var(--grey-25);
    background: linear-gradient(
        to bottom,
        #868686,
        #737373,
        var(--grey-50),
        var(--grey-50),
        var(--grey-50),
        #555555
    );
`;

const HistoryGoBackButton = styled(IoChevronBackSharp)`
    height: 25px;
    width: 25px;
    color: var(--secondary1);
`;

const NewRecordButton = styled(RiAddCircleFill)`
    height: 25px;
    width: 25px;
    color: var(--secondary1);
`;

const HomeButton = styled(AiOutlineHome)`
    height: 25px;
    width: 25px;
    color: var(--secondary1);
`;

const SafeButton = styled(AiOutlineSave)`
    height: 25px;
    width: 25px;
`;
