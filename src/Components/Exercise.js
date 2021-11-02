import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';



const Exercise = ({text}) => {

const [noInfo, setInfo] = useState("");

  const appear = () => setInfo ( 
<div className="infoBox">
  <h4>{text.exerciseInfo}</h4>
  </div>
  );


    return (
   
      <>  
      
        <div className="rowExercise" /*onClick={()=>disappear()}*/>
          
        <h4 style={{fontFamily: "cursive"}}>Exercise!</h4>
        <button onClick={() => appear()}  className="infobtn"><FontAwesomeIcon icon={faInfo} style={{color: "red"}} /></button> 

        </div>
  
        
        <p style={{fontFamily: "cursive"}}>{text.exercise}</p>
        {noInfo}
        </>




    )
}

export default Exercise
