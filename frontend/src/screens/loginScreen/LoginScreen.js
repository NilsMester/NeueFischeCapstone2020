import React, { useContext, useState } from 'react';
import UserContext from '../../contexts/UserContext';
import {useHistory} from 'react-router-dom';
import Header from "../../components/Header";
import styled from 'styled-components/macro';
import InputField from "../../components/UI/InputField";
import Login from "../../components/LogIn";
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
            <Header titel="TabLog"/>
            <Main>
                <Form onSubmit={handleSubmit}>

                        <InputField formField
                            name="email"
                            placeholder="E-Mail"
                            value={credentials.email || ""}
                            onChange={handleChange}
                            type="text"
                        />
                        <InputField formField
                            name="password"
                            placeholder="Password"
                            value={credentials.password || ""}
                            onChange={handleChange}
                            type="password"
                        />
                    {error && <p>{error}</p>}
                    <Login/>
                </Form>
            </Main>
            <TabBar tabbarsizetwo newAndChange={"newAndChange"}/>
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
`

const Form = styled.form`
display: grid;
grid-template-rows: 1fr 1fr 1fr;
grid-row-gap: 16px;
`
