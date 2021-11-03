import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle, faInfo } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';



const Exercise = ({text}) => {



const [noInfo, setInfo] = useState( "" );

const [info, setClear] = useState(setInfo);



  function appear (){ setInfo ( 
  <div className="infoBox">
  <h4>{text.exerciseInfo}</h4>
  </div>)
  }

 
  function buttonClear() { if (appear==true) {
  setClear(setInfo(""))}};

  /*
  const disappear = () => {
    setInfo("");}
  */
  

    return (
   
      <>  
      <div className="exercise" onClick={buttonClear()}> 
        <div className="rowExercise" >
          
        <h4 style={{fontFamily: "cursive"}}>Exercise!</h4>
        <button onClick={() => appear()}  className="infobtn"><FontAwesomeIcon icon={faInfo} style={{color: "red"}} /></button> 

        </div>
  
        
        <p style={{fontFamily: "cursive"}}>{text.exercise}</p>
        {noInfo}
        </div>
        </>




    )
}

export default Exercise
