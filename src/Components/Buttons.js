import React from 'react';
import ArrowLeft from './Images/Utilities/Arrow-Left3.gif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';

const Buttons = ({  count, setCount }) => {



    return (

<>
        {/*----- BUTTON INTRO -----*/}
        {count === 1 ?
        <div className="btnColumns"> 
        <br/><br/>
            <button className="btnIntro" onClick={()=> setCount(++ count)}> Social Development</button>   
            <button className="btnIntro"><FontAwesomeIcon icon={faLock} style={{ fontSize: "2rem",color: "grey"}} /> Productivity Enhance</button>
            <button className="btnIntro"><FontAwesomeIcon icon={faLock} style={{ fontSize: "2rem",color: "grey"}}/> Meditation Academy</button>
         </div> : ""}


        {/*----- BUTTON NEXT & RETURN -----*/}

        <div className={`${count > 2 ? "row" :"btnColumns"}`}>
            <br/>
        {  count > 2 ? 
        <button className="returnbtn" onClick={()=> setCount(-- count)}><img src={ArrowLeft}/></button> :""}
        {count > 1 ?
        <button className="btn" onClick={()=> setCount(++ count)}>Next</button> : ""} 
        </div>

        </>
    )
             
}

export default Buttons
