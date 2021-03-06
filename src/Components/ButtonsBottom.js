import React from 'react';
import ArrowLeft from './Images/Utilities/Arrow-Left3.gif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';

const ButtonsBottom = ({text, count, setCount }) => {

useEffect (() => {
    window.scrollTo(0,0)
}, [() => setCount])

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

        <div className={`${count > 1 ? "row" :"btnColumns"}`}>
    
        {  text.next ? 
        <button className="returnbtn" onClick={()=> setCount(-- count)}><img src={ArrowLeft}/></button> :""}
        {  text.next ? 
        <button className="btn" onClick={()=> setCount(++ count)}>Next</button> : ""} 
        </div>

        </>
    )
             
}

export default ButtonsBottom
