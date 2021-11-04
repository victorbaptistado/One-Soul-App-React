import React from 'react'
import Body from './Body';
import firstImage from "./Images/Challenges/01-Yoga-Lady.png";
import secondImage from "./Images/Challenges/04-Posture.jpg";
import { text } from '@fortawesome/fontawesome-svg-core';
import { useState } from 'react';



const Texts = () => {


 
    const [texts, setText] = useState([
        {
          header: "Are you ready?",
          body:
          <div>
          <br/><h4>Welcome to your very first challenge! I guarantee you your life will change.</h4><br/></div>,
         
          challengeChoice: `Choose your challenge:`,
          id: 1,

        },
        {
          header: "INSTRUCTIONS",
          body:  <div>
          <h4>Congratulation for taking this step. Your journey to self-improvement is about to begin! </h4> 
          <br/>
          <h4>Once you accomplish a challenge, click the NEXT button. </h4>
          </div>,
          id: 2,


        },
        {
          header: "Mindset Builder",
          body: `      It all starts with the Mind-Set. 
      It's about opening yourself to a richer state and dive into it. Delight ! 
      Before we go to the field and build-up your social skills on practice, 
      we'll develop your inner state to a happier, more confident state. 
      Let's build your mindset!
          `,
          image: <img className="image-challenge" src={firstImage}/>,
          id: 3,
        
        },
        {
          header: "Body and Mind",
          body: `      Mind affects body. Body affects mind.
      Take care of your body. Create healthy habits: 
      Improve your diet, do physical exercises (like lifting weights, jogging, martial arts). 
      A healthy life is the way to allow yourself for the best you can become. 

      We'll focus now on the correct use of the body. 
      Using your body correctly is definitely the easiest path for a mindset 
      that will lead you to an active social presence. `,
          image: <img className="image-challenge" src={""}/>,
          id: 4,
        },
        {
          header: "Body and Mind",
          exerciseAllow: true,
          exerciseInfo: "Why is it so important? As body affects the mind, finding a position of confidence can reduce social anxiety.",
          exercise: `Get up. Shoulders back! 
Look above! Upgrade your posture. 
Every moment that you need a confidence boost, find that posture. 
That's your first path to a higher social state.`,
      image: <img className="image-challenge" src={secondImage}/>,
          id: 5,
        },
        {
          header: "Role Model",
          body: `Now I want you to think about 3 people who you can model their actions. 
          Write down their names, we'll use them as models to achieve your gols. 
          Reflect about their values and beliefs  . In time of doubts, ask yourself: what would they do? `,
          id: 6,
        },
        {
        header: "Music Boost",
        body: `Çet's have fun! 
        Create a playlist: call it "Energy Boost" (or whatever you may want to identify.)
        `,
        image: <img className="image-challenge" src={""}/>,
        id: 7,
        },
        {
          header: "The Magician",
          body: `Imagination is key to success. Imagination releases a powerfull mind.`,
          image: <img className="image-challenge" src={""}/>,
          id: 8,

        },
      ])

      const [count, setCount] = useState(1);

      let textFilt = texts.filter(text => text.id === count) ;
     

 
    return (

    <>
    <Body textFilt={textFilt} count={count} setCount={setCount}/>
    </>


  
    )
}

export default Texts
