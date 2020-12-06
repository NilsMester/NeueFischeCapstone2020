import React from 'react';
import styled from 'styled-components/macro';
import {useHistory} from "react-router-dom";
import {IoChevronBackSharp} from "react-icons/io5";
import {RiAddCircleFill} from "react-icons/ri";
import {AiOutlineSave, AiOutlineHome} from "react-icons/ai";

export default function TabBar({ onSave, recordData, ...rest}) {
    const history = useHistory();

    const Tabs = (props) =>{
        if(props.newAndChange){
            return (
                <ActionBar2Tabs {...rest}>
                    <ButtonStyled onClick={() => history.goBack()}>
                        <HistoryGoBackButtonStyled/>
                    </ButtonStyled>
                    <ButtonStyled onClick={handleSubmit}>
                        <SafeButtonStyled/>
                    </ButtonStyled>
                </ActionBar2Tabs>
            )
        }else if (props.recordsView){
            return (
                <ActionBar3Tabs {...rest}>
                    <ButtonStyled onClick={() => history.goBack()}>
                        <HistoryGoBackButtonStyled/>
                    </ButtonStyled>
                    <ButtonStyled onClick={() => history.push(`/newRecord`)}>
                        <NewRecordButtonStyled/>
                    </ButtonStyled>
                    <ButtonStyled onClick={() => history.push(`/home`)}>
                        <HomeButtonStyled/>
                    </ButtonStyled>
                </ActionBar3Tabs>
            )
        }return null
    }

    return ( <Tabs {...rest}/>

    )



    function handleSubmit(event) {
        event.preventDefault();
        onSave(recordData);
    }

}
const ActionBar2Tabs = styled.section`
display: grid;
align-items: end;
grid-template-columns: 0.5fr 0.5fr;
background: linear-gradient(
    to bottom,
    #d4d4d4,
    #9a9a9a,
    #868686,
    #737373,
    var(--grey-50),
    var(--grey-50))
`

const ActionBar3Tabs = styled.section`
display: grid;
align-items: end;
grid-template-columns: 0.5fr 0.5fr 0.5fr;
background: linear-gradient(
    to bottom,
    #d4d4d4,
    #9a9a9a,
    #868686,
    #737373,
    var(--grey-50),
    var(--grey-50))
`

const ButtonStyled = styled.button`
width: auto;
height: 45px;
border-radius: 30% 30% 0 0;

border-color: var(--grey-25);
background: linear-gradient(
        to bottom,
    #868686,
    #737373,
    var(--grey-50),
    var(--grey-50),
    var(--grey-50),
    #555555)
`

const HistoryGoBackButtonStyled = styled(IoChevronBackSharp)`
height: 25px;
width: 25px;
color: var(--secondary1);
`

const NewRecordButtonStyled = styled(RiAddCircleFill)`
height: 25px;
width: 25px;
color: var(--secondary1);
`

const HomeButtonStyled = styled(AiOutlineHome)`
height: 25px;
width: 25px;
color: var(--secondary1);
`

const SafeButtonStyled = styled(AiOutlineSave)`
height: 25px;
width: 25px;
color: var(--secondary1);
`
