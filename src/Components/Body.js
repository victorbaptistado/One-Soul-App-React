import { text } from '@fortawesome/fontawesome-svg-core';
import React, { useState } from 'react';
import ButtonsBottom from './ButtonsBottom';
import ButtonsHeader from './ButtonsHeader';
import Challenge from './Challenge';
import Challengeform from './Challengeform';
import ImagesChallenge from './ImagesChallenge';

//import Text from './Text';

const Body = ({textFilt, count, setCount}) => {



    return (
    
    
    textFilt.map((text) => 

<>
    
   
  
    
      <div key={text.id}>
      <ButtonsHeader key={text.id} count={count} setCount={setCount}/>

      {/*---- SET DISPLAY (Single Column || Double) ----*/}
      <div className={`${(text.doubleColumn) ? 'columns' : ""} `}  > 
      <div className="container1" >
    
      {/*---- SET TYPE (Regular || Form) ----*/}
      {text.challengeForm ? 
      <Challengeform text={text} count={count} setCount={setCount} /> :
      <Challenge text={text} count={count} setCount={setCount} />    
      }

      {/* ---- GENERAL BUTTONS ---- */ }
    <ButtonsBottom key={text.id} count={count} setCount={setCount}/>
      </div>
      
      <div className="container2">


      {/* ---- SET IMAGE CHALLENGE ----*/}
      {text.imageChallenge ?
      <ImagesChallenge text={text}/> : ""
      }

      </div> 
      </div>
      </div>
      </>
    )
        
    );
    
      }

export default Body
