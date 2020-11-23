import React from 'react'

export default function Record({record, actions =[], className }){
    return(
        <section className={className}>
            <h2>{record.titel}</h2>
            <p>{record.recordLink}</p>
            <ul>
                {record.tagsList?.map((tag, i) => (
                        <li key={i} className="tag">
                            {tag}
                        </li>
                    )
                )}
            </ul>
            <p>{record.description}</p>
            <button>{actions}</button>
        </section>

    )

}