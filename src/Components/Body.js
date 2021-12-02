
import React, { useState } from 'react';
import ButtonsBottom from './ButtonsBottom';
import ButtonsHeader from './ButtonsHeader';
import Theory from './Theory';
import TheoryForm from './TheoryForm';
import Challenge from './Challenge';
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


      {/*---- THEORY ----*/}
      {text.theory ?
      <Theory text={text} />: ""}    
      
      {/*---- THEORY FORM ----*/}
      {text.theoryForm ? 
      <TheoryForm  text={text}/>:""}

      {/*---- CHALLENGE ----*/}
      {text.challenge ? 
      <Challenge  text={text} />:""}

      </div> 

      </div>

      {/* ---- GENERAL BUTTONS ---- */ }
      <ButtonsBottom text={text} count={count} setCount={setCount}/>
      </>
    )       
    );
    
      }

export default Body
