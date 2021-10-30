import React, { useState } from 'react';
import Buttons from './Buttons';
import Text from './Text';
import ImagesChallenge from './ImagesChallenge';
import firstImage from "./Images/Challenges/01-Yoga-Lady.png"
//import Text from './Text';

const Texts = () => {

    const [texts, setText] = useState([
        {
          header: "Are you ready?",
          body: `Welcome to your very first challenge! I guarantee you your life will change.\n\n`,
         
          challengeChoice: `Choose your challenge: `,
          id: 1,

        },
        {
          header: "INSTRUCTIONS",
          body: `Your journey to self-improvement is about to begin! Congratulation for taking this step. 
          Each quest must be taken in a day, and once you accomplish the daily challenge, click the NEXT button. 
          If for any reason you're not able to realise the challenge, press the 'scape' button to jump to the next challenge. 
          Once per day, dedicate yourself to each challenge. \n\nNow let's start!`,
          id: 2,


        },
        {
          header: "Instructions",
          body: `Body`,
          image: <img className="image-challenge" src={firstImage}/>,
          id: 3,

        }])







      const [count, setCount] = useState(1);
      
      let textFilt = texts.filter(text => text.id === count) ;


  

    return (
      
      textFilt.map(text => 
      <div key={text.id}>
      <div className={`${count > 2 ? 'columns' : ""} `}  > 
      <div className="container1" >
      <Text text={text} count={count} setCount={setCount} />
      <Buttons key={text.id} count={count} setCount={setCount}/>
      </div>
      <div className="container2">
      <ImagesChallenge text={text}/>
      </div> 
      </div>
      </div>
      )
        
    );
      }

export default Texts
