import React from 'react'

export default function Record({record, action =[], className }){
    return(
        <section className={className}>
            <h2>{record.recordLink}</h2>
            <ul>
                {record.tagsList?.map((tag, i) => (
                        <li key={i} className="tag">
                            {tag}
                        </li>
                    )
                )}
            </ul>
            <p>{record.description}</p>
            <button>{action}</button>
        </section>

    )

}