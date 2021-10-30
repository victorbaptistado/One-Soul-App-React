import React from 'react';
import ArrowLeft from './Images/Utilities/Arrow-Left3.gif';


const Buttons = ({  count, setCount }) => {



    return (

<>
        {/*----- BUTTON INTRO -----*/}
        {count === 1 ?
        <div className="btnColumns"> 
        <br/><br/>
            <button className="btnIntro" onClick={()=> setCount(++ count)}> Social Development</button>   
            <button className="btnIntro"><img href=""/>Physical Development</button>
            <button className="btnIntro">Self Development</button>
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
