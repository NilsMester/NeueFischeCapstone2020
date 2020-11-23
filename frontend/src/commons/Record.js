import React from 'react'

export default function Record({record, actions = [], className}) {
    return (
        <section className={className}>
            <h2>{record.titel}</h2>
            <p>{record.recordLink}</p>
            <ul>
                {record.tagsList?.map((tag) => (
                    <li key={tag} className="tag">
                        {tag}
                    </li>
                    )
                )}
            </ul>
            <p>{record.description}</p>
            <div>{actions}</div>
        </section>

    )

}