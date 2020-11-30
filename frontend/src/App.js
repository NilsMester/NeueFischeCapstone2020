import React from 'react';
import UserContextProvider from "./contexts/UserContextProvider";
import {Redirect, Route, Switch} from "react-router-dom";
import styled from 'styled-components/macro';
import LoginPage from "./pages/loginPage/LoginPage";
import ProtectedRoute from "./routing/ProtectedRoute";
import HomePage from "./pages/HomePage";
import AddRecordPage from "./pages/addRecordPage/AddRecordPage"
import RecordContextProvider from "./contexts/RecordContextProvider";
import SingleRecordPage from "./pages/singleRecordPage/SingleRecordPage";
import EditRecordPage from "./pages/editRecordPage/EditRecordPage";
import TagsContextProvider from "./contexts/TagsContextProvider";
import UserRecordListPage from "./pages/userRecordListPage/UserRecordListPage";

function App() {
    return (
        <UserContextProvider>
            <RecordContextProvider>
                <TagsContextProvider>
                <PageLayout>
                <Switch>
                    <Route path="/login" component={LoginPage}/>
                    <ProtectedRoute path="/home" component={HomePage}/>
                    <ProtectedRoute path="/records" component={UserRecordListPage}/>
                    <ProtectedRoute path= "/newRecord" component={AddRecordPage}/>
                    <ProtectedRoute path= "/record/:id" component={SingleRecordPage}/>
                    <ProtectedRoute path= "/edit/:id" component={EditRecordPage}/>

                    <Route path="/">
                        <Redirect to="/records"/>
                    </Route>
                </Switch>
                </PageLayout>
            </TagsContextProvider>
            </RecordContextProvider>
        </UserContextProvider>
    );
}

export default App;

const PageLayout = styled.div`
  display: grid;
  grid-template-rows: 48px 1fr 48px;
  height: 100vh;
`;
