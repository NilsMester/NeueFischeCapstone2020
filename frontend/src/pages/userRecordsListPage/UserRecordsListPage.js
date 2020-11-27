import React from 'react'
import UserRecordsList from "../../components/records/UserRecordsList";
import Header from "../../components/Header";
import TabBar from "../../components/UI/TabBar";

export default function UserRecordsListPage () {
    return(
   <>
        <Header titel="Your Records"/>
        <UserRecordsList/>
        <TabBar/>
     </>
    )

}
