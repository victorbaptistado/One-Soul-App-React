import React from 'react'

const Body = ({texts}) => {
    return (
        <div>
            <p>{texts[0].body}</p>
            <br />
            <h3>{texts[0].challengeChoice}</h3>
            <br />
        </div>
    )
}

export default Body
