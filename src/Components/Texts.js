import React, { useState } from 'react';
import Buttons from './Buttons';
import Challenge from './Challenge';
import Challengeform from './Challengeform';
import ImagesChallenge from './ImagesChallenge';
import firstImage from "./Images/Challenges/01-Yoga-Lady.png"
//import Text from './Text';

const Texts = () => {

    const [texts, setText] = useState([
        {
          header: "Are you ready?",
          body: `Welcome to your very first challenge! I guarantee you your life will change.\n\n`,
         
          challengeChoice: `Choose your challenge:`,
          id: 1,

        },
        {
          header: "INSTRUCTIONS",
          body: `Your journey to self-improvement is about to begin! 
          Congratulation for taking this step. 
          Each quest must be taken in a day, and once you accomplish the daily challenge, click the NEXT button. 
          If for any reason you're not able to realise the challenge, press the 'scape' button to jump to the next challenge. 
          Once per day, dedicate yourself to each challenge. \n\nNow let's start!`,
          id: 2,


        },
        {
          header: "Mindset Builder",
          body: `It all starts with the Mind-Set. 
          It's about opening yourself to a richer state and diving into it. 
          Before we go to the field and build-up your social skills on practice, 
          we'll develop your inner state to a happier, 
          The NPL Imagery, to build confidence`,
          image: <img className="image-challenge" src={firstImage}/>,
          id: 3,
        
        },
        {
          header: "Body and Mind",
          body: `Mind affects body. Body affects mind.`,
          exerciseAllow: true,
          exerciseInfo: "Why is this important? As body affects the mind, finding a position of confidence can release ",
          exercise: `Look up. Shoulders back. posture upgrate`,
          image: <img className="image-challenge" src={firstImage}/>,
          id: 4,
        },
        {
          header: "The Magician",
          body: `Imagery`,
          image: <img className="image-challenge" src={""}/>,
          id: 5,

        },
        {
          header: "Role Model",
          body: `Now I want you to think about 3 people who you can model their actions`,
          id: 6,
        }
      ])


      const [count, setCount] = useState(1);
      
      let textFilt = texts.filter(text => text.id === count) ;

    return (
      
      textFilt.map(text => 
      <div key={text.id}>


      <div className={`${(count > 2) && (count !== 6) ? 'columns' : ""} `}  > 
      <div className="container1" >


      {count === 6 ? 
      <Challengeform text={text} count={count} setCount={setCount} /> :
      <Challenge text={text} count={count} setCount={setCount} />    
      }



    <Buttons key={text.id} count={count} setCount={setCount}/>
      </div>
      <div className="container2">

      {count !== 6 ?
      <ImagesChallenge text={text}/> : ""
      }

      </div> 
      </div>
      </div>
      )
        
    );
      }

export default Texts
