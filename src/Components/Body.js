import { text } from '@fortawesome/fontawesome-svg-core';
import React, { useState } from 'react';
import Buttons from './Buttons';
import Challenge from './Challenge';
import Challengeform from './Challengeform';
import ImagesChallenge from './ImagesChallenge';

//import Text from './Text';

const Body = ({textFilt, count, setCount}) => {






    return (
    
    
    textFilt.map((text) => 
      
      <div key={text.id}>




      
      {/*---- SET DISPLAY (Single Column || Double) ----*/}
      <div className={`${(count > 2) && (count !== 4) & (count !== 6) & (count !== 8)? 'columns' : ""} `}  > 
      <div className="container1" >





      
      {/*---- SET TYPE (Regular || Form) ----*/}
      {count === 8 ? 
      <Challengeform text={text} count={count} setCount={setCount} /> :
      <Challenge text={text} count={count} setCount={setCount} />    
      }


      {/* ---- GENERAL BUTTONS ---- */ }
    <Buttons key={text.id} count={count} setCount={setCount}/>
      </div>
      
      <div className="container2">


      {/* ---- SET IMAGE CHALLENGE ----*/}
      {(count !== 4),(count !== 6), (count !== 8)?
      <ImagesChallenge text={text}/> : ""
      }

      </div> 
      </div>
      </div>
    )
        
    );
    
      }

export default Body
