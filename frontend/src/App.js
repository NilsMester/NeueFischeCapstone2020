import React from 'react';
import UserContextProvider from "./contexts/UserContextProvider";
import {Redirect, Route, Switch} from "react-router-dom";
import LoginPage from "./pages/loginPage/LoginPage";
import ProtectedRoute from "./routing/ProtectedRoute";
import HomePage from "./pages/HomePage";
import AddRecordPage from "./pages/addRecordPage/AddRecordPage"
import RecordContextProvider from "./contexts/RecordContextProvider";
import UserRecordsListPage from "./pages/userRecordsListPage/UserRecordsListPage";
import SingleRecordPage from "./pages/singleRecordPage/SingleRecordPage";

function App() {
    return (
        <UserContextProvider>
            <RecordContextProvider>
                <Switch>
                    <Route path="/login" component={LoginPage}/>
                    <ProtectedRoute path="/home" component={HomePage}/>
                    <ProtectedRoute path="/records" component={UserRecordsListPage}/>
                    <ProtectedRoute path= "/newRecord" component={AddRecordPage}/>
                    <ProtectedRoute path= "/record/:id" component={SingleRecordPage}/>

                    <Route path="/">
                        <Redirect to="/newRecord"/>
                    </Route>
                </Switch>
            </RecordContextProvider>
        </UserContextProvider>
    );
}

export default App;
