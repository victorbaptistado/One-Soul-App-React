import React from 'react'

const Text = ({text}) => {

    return (
   
        <div key={text.id}>
      
            <h2>{text.header}</h2>
            <p>{text.body}</p>
            <p>{text.challengeChoice}</p>
            
        </div>
    )
}

export default Text
