import React from 'react';
/*import ArrowLeft from './Images/Utilities/Arrow-Left3.gif';*/
import Menu from './Images/Utilities/Menu.gif';
import Exercise from './Exercise';



const Challenge = ({text, count, setCount}) => {
 
 

const handle = (selectedTopic) =>{
 


    switch (selectedTopic) {
      case "Body & Mind":
        setCount(4)
        break;
    case "Music Boost":
        setCount(6)
        break;
    case "The Magician":
        setCount(7)
        break;
    }
    
}

    return (
        <>
    <div className="rowMenu">
    {/*  TEXTS: CHALLENGES AND INTRO  */}
        
        <br/>  
        {count > 1 ?
        <a href="./App.js" className="homebtn"><img src={Menu}/></a> : ""}

    {/*---- selectTOPIC ----*/}
    {count > 1 ?
    <><select className="selectTopic" onChange={e => {const selectedTopic = e.target.value; handle(selectedTopic) }}>
      <option value={"Select Topic"}>Select Topic</option>
      <option value={"Body & Mind"}>Body & Mind</option>
      <option value={"Music Boost"}>Music Boost</option>
      <option value={"The Magician"}>The Magician</option>
      </select></>: ""
    }
      </div>


        <h2 >{text.header}</h2>
  
        <br/><br/>
  
        <p style={{whiteSpace: "pre-wrap"}}>{text.body}</p>



        {/* Exercise*/}     

        {text.exerciseAllow === true ?
        <Exercise text={text}/> : ""}

   

    
        
        
        <h2 style={{whiteSpace: "pre-wrap"}}>{text.challengeChoice}</h2>
        

        </>
    ) 
        }

export default Challenge
