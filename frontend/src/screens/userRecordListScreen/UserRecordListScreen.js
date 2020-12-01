import React from 'react'
import Header from "../../components/Header";
import TabBar from "../../components/UI/TabBar";
import UserRecordList from "../../components/records/UserRecordList";

export default function UserRecordListScreen () {
    return(
   <>
        <Header titel="Your Records"/>
        <UserRecordList/>
        <TabBar/>
     </>
    )

}
