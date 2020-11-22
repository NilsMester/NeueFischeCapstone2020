import React from 'react'

export default function Tag({userTag, action =[], className }){
    return(
        <section className={className}>
            <p>{userTag._id}</p>
        </section>

    )

}