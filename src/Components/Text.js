import React from 'react';
import ArrowLeft from './Images/Utilities/Arrow-Left3.gif';
import Menu from './Images/Utilities/Menu.gif';

const Text = ({text, count}) => {


 
    return (
        <>

    {/*  TEXTS: CHALLENGES AND INTRO  */}

        <div className={`${count > 2 ? 'columns' : ""} `}  > 
        <div className="container1" >
        <br/>  
        {count > 1 ?
        <a href="./App.js" className="homebtn"><img src={Menu}/></a> : ""}

        <h2 >{text.header}</h2>
  
       
  
        <br/><br/>
  
        <p>{text.body}</p>
        <h2>{text.challengeChoice}</h2>
        </div>

        {/*  IMAGES: CHALLENGES  */}

        <div className="container2">
        {text.image} 
        </div>
     
        </div>
        
        {/*  BUTTONS: NEXT AND RETURN  */}

        <div className={`${count > 2 ? "row" :""}`}>
        <div className="btnColumns">
        {  count > 2 ? 
        <button className="returnbtn"><img src={ArrowLeft}/></button> :""}
        {count > 1 ?
        <button className="btn">Next</button> : ""} 
        <br/><br/><br/>
        </div>
        </div>

        </>
    ) 
        }

export default Text
