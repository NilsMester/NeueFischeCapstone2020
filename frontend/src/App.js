import React from 'react';
import UserContextProvider from "./contexts/UserContextProvider";
import {Redirect, Route, Switch} from "react-router-dom";
import LoginPage from "./pages/loginPage/LoginPage";
import ProtectedRoute from "./routing/ProtectedRoute";
import HomePage from "./pages/HomePage";

function App() {
    return (
        <UserContextProvider>
            <Switch>
                <Route path="/login" component={LoginPage}/>
                <ProtectedRoute path="/home" component={HomePage}/>


                <Route path="/">
                    <Redirect to="/home" />
                </Route>
            </Switch>
        </UserContextProvider>
    );
}

export default App;
