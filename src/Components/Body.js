import { text } from '@fortawesome/fontawesome-svg-core';
import React, { useState } from 'react';
import ButtonsBottom from './ButtonsBottom';
import ButtonsHeader from './ButtonsHeader';
import Challenge from './Challenge';
import Challengeform from './Challengeform';
import ImagesChallenge from './ImagesChallenge';
import ProgressBar from './ProgressBar';

//import Text from './Text';

const Body = ({textFilt, count, setCount}) => {



    return (
    
    
    textFilt.map((text) => 

<>
    {/*---- Header Button ---- */}
      <div key={text.id} >
      <ButtonsHeader count={count} setCount={setCount}/>

    {/*---- Progress Bar ---- */}
      {text.progressbar ?
      <ProgressBar text={text} /> :""}

      <div className="container2">

      {/* ---- SET IMAGE CHALLENGE ----*/}
      {text.imageChallenge ?
      <ImagesChallenge text={text}/> : ""
      }
      </div>

      <div className="container1" >
    
      {/*---- SET TYPE (Regular || Form) ----*/}
      {text.challengeForm ? 
      <Challengeform  text={text} count={count} setCount={setCount} /> :
      <Challenge text={text} count={count} setCount={setCount} />    
      }
      </div> 

      </div>

      {/* ---- GENERAL BUTTONS ---- */ }
      <ButtonsBottom text={text} count={count} setCount={setCount}/>
      </>
    )
        
    );
    
      }

export default Body
