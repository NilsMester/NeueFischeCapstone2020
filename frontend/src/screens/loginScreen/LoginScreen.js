import React, { useContext, useState } from 'react';
import UserContext from '../../contexts/UserContext';
import {useHistory} from 'react-router-dom';

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
            <h1>LOGIN</h1>
            <main>
                <form onSubmit={handleSubmit}>
                    <label>
                        E-Mail
                        <input
                            name="email"
                            value={credentials.email || ""}
                            onChange={handleChange}
                            type="text"
                        />
                    </label>
                    <label>
                        Password
                        <input
                            name="password"
                            value={credentials.password || ""}
                            onChange={handleChange}
                            type="password"
                        />
                    </label>
                    {error && <p>{error}</p>}
                    <button>Login</button>
                </form>
            </main>
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
