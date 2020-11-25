import React from 'react'
import TagDesign from "./TagDesign";

export default function Tag({userTag, action =[], className }){
    return(
        <TagDesign className={className}>
            {userTag}
        </TagDesign>

    )

}