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
import EditRecordPage from "./pages/editRecordPage/EditRecordPage";

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
                    <ProtectedRoute path= "/edit/:id" component={EditRecordPage}/>

                    <Route path="/">
                        <Redirect to="/records"/>
                    </Route>
                </Switch>
            </RecordContextProvider>
        </UserContextProvider>
    );
}

export default App;
