import React from 'react';
import ArrowLeft from './Images/Utilities/Arrow-Left3.gif';
import Menu from './Images/Utilities/Menu.gif';
import Exercise from './Exercise';



const Challenge = ({text, count, setCount}) => {
 
 

    return (
        <>

    {/*  TEXTS: CHALLENGES AND INTRO  */}
        
        <br/>  
        {count > 1 ?
        <a href="./App.js" className="homebtn"><img src={Menu}/></a> : ""}

        <h2 >{text.header}</h2>
  
        <br/><br/>
  
        <p style={{whiteSpace: "pre-wrap"}}>{text.body}</p>



        {/* Exercise*/}     

        {text.exerciseAllow === true ?
        <Exercise text={text}/> : ""}

   

    
        
        
        <h2 style={{whiteSpace: "pre-wrap"}}>{text.challengeChoice}</h2>
        

        </>
    ) 
        }

export default Challenge
