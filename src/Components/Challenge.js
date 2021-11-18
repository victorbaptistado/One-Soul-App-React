import React from 'react';
/*import ArrowLeft from './Images/Utilities/Arrow-Left3.gif';*/
import Exercise from './Exercise';
import ImagesChallenge from './ImagesChallenge';

const Challenge = ({text, count, setCount}) => {



    return (
        <>

        <h2 >{text.header}</h2>
  
        <br/><br/>
  

  {text.imageChallenge ? 
   <p style={{whiteSpace: "pre-wrap"}}>{text.body}</p>
: <p style={{textAlign:"center", whiteSpace: "pre-wrap"}}>{text.body}</p>
  }

        {/* Exercise*/}     

        {text.exerciseAllow === true ?
        <Exercise text={text}/> : ""}
             
        <h2 style={{whiteSpace: "pre-wrap"}}>{text.challengeChoice}</h2>
        
        </>
    ) 
        }

export default Challenge
