import React, { useContext, useState } from 'react';
import UserContext from '../../contexts/UserContext';
import {useHistory} from 'react-router-dom';
import Header from "../../components/Header";
import styled from 'styled-components/macro';
import InputField from "../../components/UI/InputField";
import TabBar from "../../components/UI/TabBar";


const emptyCredentials = {
    username: '',
    password: '',
};

export default function LoginScreen(){
    const {loginWithUserCredentials} = useContext(UserContext);
    const [credentials, setCredentials] = useState(emptyCredentials);
    const [error, setError] = useState('');
    const history = useHistory();
    return(
        <>
            <Header titel="Login"/>
            <Main>
                <img src="./Tab_Log_Logo.png" alt="Tab Log Logo"/>

                <Form onSubmit={handleSubmit}>
                    <InputField formField
                                name="email"
                                placeholder="E-Mail"
                                value={credentials.email || ""}
                                onChange={handleChange}
                                type="text"
                                autoComplete="username"
                    />
                    <InputField formField
                                name="password"
                                placeholder="Password"
                                value={credentials.password || ""}
                                onChange={handleChange}
                                type="password"
                                autoComplete="current-password"
                    />
                    {error && <p>{error}</p>}
                </Form>
            </Main>
            <TabBar handleLogin={handleSubmit} tabbarswitch={"login"} tabbarcolumns={"oneButton"} />
        </>
    );

    function handleSubmit(event) {
        event.preventDefault();
        loginWithUserCredentials(credentials)
            .then(() => history.push('/'))
            .catch(() => setError('Unknown username or password.'));
    }

    function handleChange(event) {
        setCredentials({ ...credentials, [event.target.name]: event.target.value });
    }
}

const Main = styled.main`
padding: 10px;
display: grid;
grid-template-rows: 0.5fr 0.5fr;
justify-content: center;
grid-row-gap: 16px;
`

const Form = styled.form`
display: grid;
grid-template-rows: 0.5fr 0.5fr;
grid-row-gap: 16px;
`
