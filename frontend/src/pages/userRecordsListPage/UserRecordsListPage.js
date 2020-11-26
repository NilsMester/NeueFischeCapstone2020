import React from 'react'
import UserRecordsList from "./UserRecordsList";
import Header from "../../commons/Header";
import ActionBar from "../../commons/ActionBar";

export default function UserRecordsListPage () {
    return(
   <>
        <Header titel="Your Records"/>
        <UserRecordsList/>
        <ActionBar/>
     </>
    )

}
