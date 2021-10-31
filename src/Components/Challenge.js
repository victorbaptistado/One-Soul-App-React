import React from 'react';
import ArrowLeft from './Images/Utilities/Arrow-Left3.gif';
import Menu from './Images/Utilities/Menu.gif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo } from '@fortawesome/free-solid-svg-icons';


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

        <br/><br/>
        {text.exerciseAllow === true ?
        <div className="exercise">
        
        <div className="row">
        <p style={{fontFamily: "cursive"}}>Exercise!</p>
        <button className="infobtn"><FontAwesomeIcon icon={faInfo} style={{color: "red"}} /></button>
 
        </div>
        <br/>
        <p style={{fontFamily: "cursive"}}>{text.exercise}</p>
        
        </div> : ""
        }
        
        <h2 style={{whiteSpace: "pre-wrap"}}>{text.challengeChoice}</h2>
        

        </>
    ) 
        }

export default Challenge
