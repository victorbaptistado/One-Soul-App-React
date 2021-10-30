import React from 'react';
import ArrowLeft from './Images/Utilities/Arrow-Left3.gif';
import Menu from './Images/Utilities/Menu.gif';

const Challengeform = ({text, count, setCount}) => {
 
 

    return (
        <>

    {/*  TEXTS: CHALLENGES AND INTRO  */}
        
        <br/>  
        {count > 1 ?
        <a href="./App.js" className="homebtn"><img src={Menu}/></a> : ""}

        <h2 >{text.header}</h2>
  
        <br/><br/>
  
        <p style={{whiteSpace: "pre-wrap"}}>{text.body}</p>

        <br></br><br></br>
        <form onSubmit>
        <h2><input type="text"/> </h2>
        <h2><input type="text"/></h2>
        <h2><input type="text"/> </h2>
        <div className="btnColumns">
        <input className="btnIntro" type="submit" name="da"/> 
        </div>
        </form>

        </>
    ) 
        }

export default Challengeform
