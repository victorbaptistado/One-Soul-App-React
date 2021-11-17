import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';



const Exercise = ({text}) => {



const [noInfo, setInfo] = useState( "" );


  function appear (){ setInfo (
  <div className="infoBox">
  <button onClick={() => buttonClear()}> <FontAwesomeIcon icon={faTimesCircle} style={{fontSize: "1.5rem", color: "red"}}/></button>
  <h4>{text.exerciseInfo}</h4>
  </div>)
  }

 
  const buttonClear = () => { setInfo("")};

  /*
  const disappear = () => {
    setInfo("");}
  */
  

    return (
   
      <>  
      <div className="exercise" > 
        <div className="rowExercise" >
          
        <h4 style={{fontFamily: "cursive"}}>Exercise!</h4>
        <button onClick={() => appear()}  className="infobtn"><FontAwesomeIcon icon={faInfoCircle} style={{ fontSize: "4rem",color: "blue"}} /></button> 

        </div>
  
        
        <p style={{fontFamily: "cursive"},{whiteSpace: "pre-wrap"}}>{text.exercise}</p>
        {noInfo}
        </div>
        </>




    )
}

export default Exercise
