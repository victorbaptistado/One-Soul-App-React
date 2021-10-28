import React from 'react';
import ArrowLeft from './Images/Utilities/Arrow-Left3.gif';
import Menu from './Images/Utilities/Menu.gif';

const Text = ({text, count}) => {


 
    return (
        <>

        <div className={`${count > 1 ? 'columns' : ""} `}  > 
        <div className="container1" >
    
        <div className={`${count>1 ? "columnsHead" : ""} `}> 

        {count > 1 ?
        <button className="homebtn"><img src={Menu}/></button> : ""}

        <h2 >{text.header}</h2>
        </div>
        <p>{text.body}</p>
        <h2>{text.challengeChoice}</h2>
        </div>


        <div className="container2">
        {text.image} 
        </div>
     
        </div>
        
        
        <div className={`${count > 1 ? "row" :""}`}>
        
        {  count > 1 ? 
        <div className="columns">
        <button className="returnbtn"><img src={ArrowLeft}/></button> 
        <button className="btn">Next</button></div> : "" }
            
        </div>

        </>
    ) 
        }

export default Text
