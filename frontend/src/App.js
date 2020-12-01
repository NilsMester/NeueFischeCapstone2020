import React from 'react';
import UserContextProvider from "./contexts/UserContextProvider";
import {Redirect, Route, Switch} from "react-router-dom";
import styled from 'styled-components/macro';
import LoginScreen from "./screens/loginScreen/LoginScreen";
import ProtectedRoute from "./routing/ProtectedRoute";
import HomePage from "./screens/HomeScreen";
import AddRecordScreen from "./screens/addRecordscreen/AddRecordScreen"
import RecordContextProvider from "./contexts/RecordContextProvider";
import SingleRecordScreen from "./screens/singleRecordScreen/SingleRecordScreen";
import EditRecordPage from "./screens/editRecordScreen/EditRecordScreen";
import TagsContextProvider from "./contexts/TagsContextProvider";
import UserRecordListScreen from "./screens/userRecordListScreen/UserRecordListScreen";

function App() {
    return (
        <UserContextProvider>
            <RecordContextProvider>
                <TagsContextProvider>
                    <PageLayout>
                        <Switch>
                            <Route path="/login" component={LoginScreen}/>
                            <ProtectedRoute path="/home" component={HomePage}/>
                            <ProtectedRoute path="/records" component={UserRecordListScreen}/>
                            <ProtectedRoute path="/newRecord" component={AddRecordScreen}/>
                            <ProtectedRoute path="/record/:id" component={SingleRecordScreen}/>
                            <ProtectedRoute path="/edit/:id" component={EditRecordPage}/>

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
