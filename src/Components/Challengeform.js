import React from 'react';
import Menu from './Images/Utilities/Menu.gif';
import { useState,useEffect } from 'react';



const Challengeform = ({key, text, count}) => {
 


/*--- MODEL Save & Get --- */

const [model1, setModel] = useState(() => {  

const saved = localStorage.getItem("model1");
const initialValue = JSON.parse(saved);
return initialValue || "";
});

useEffect(() => {
localStorage.setItem("model1",JSON.stringify(model1));
}, [model1]); 




    return (
    <>

    {/*  TEXTS: CHALLENGES AND INTRO  */}
        
      <br/>  

        <h2>{text.header}</h2>
  
        <br/><br/>
  
        <p style={{textAlign:"center",whiteSpace: "pre-wrap"}}>{text.body}</p>

        <br></br><br></br>
        <form>
        <h2><input type="text" value={model1} onChange={(e) => setModel(e.target.value) } placeholder={"model 1"} aria-label="model 1" required/> </h2>
        <h2><input type="text" placeholder={"model 2"} aria-label="model 2"/></h2>
        <h2><input type="text" placeholder={"model 3"} aria-label="model 3"/> </h2>
        <br/><br/>
        <div className="btnColumns">
        {/*<input className="btnIntro" type="submit"/> */}
        </div>
        </form>

    </>
    ) 
        }

export default Challengeform
