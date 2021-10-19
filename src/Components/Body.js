import React from 'react'





const Body = ({nextText, texts}) => {


 
 
    return (


        <div key={texts.id}>
        <p>{texts.body}</p>
        <br />
        <h3>{texts.challengeChoice}</h3>
        <br />
         </div>


  
    )
}

export default Body
