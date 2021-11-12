import React from 'react'
import Body from './Body';
import firstImage from "./Images/Challenges/01-Yoga-Lady.png";
import secondImage from "./Images/Challenges/04-Posture.jpg";
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
      It's about opening yourself to a richer state and dive into it. 
      Delight ! 

      Before we go to the field and build-up your social skills on practice, 
      we'll develop your inner state to a happier, more confident state. 

      Let's build your mindset!
          `,
          image: <img className="image-challenge" src={firstImage}/>,
          id: 3,
        
        },
        {
          header:"Body and Mind",
      body:`  Mind affects body. 
  Body affects mind.
  A healthy life is the way to allow yourself for the best you can become.
  Take care of your body! Create healthy habits: 
  Improve your diet, do physical exercises (lifting weights, jogging, martial arts).  
  These are the foundations for your social presence. We won't dive too deep on these topics. 

  Now we'll focus on the correct use of the body & how you can use it to alter your inner state. 
  Using your body correctly is definitely the easiest path 
  for a mindset change that will lead you to an active social presence. `,
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
          header: "Music Boost",
          body: `Time for fun! Music can be an amazing tool for social presence. 
          It's one of the best ways to alter mind states. 
  
          Go to your phone, create a playlist, or many as you want. Call it "Social Boost", whatever you may want to identify it.
          Meditate about the occasion, how do you want to behave? 
          If it's a party or a work meeting, which you need to evoque strong presence, an energetic playlist may suit you. 
          If it's an event in which you need to be on control and intellectually aware, classic music may be the answer.
  
          Once you have created your playlist, dive into it. 
          But how? It may sound weird, but start dancing! 
          Yes, dance alone, dance with yourself. 
          Remember, body affects mind: 
          Once you start moving, you're telling your mind how to behave.
          Use that before any social occasion and have fun!
          `,
          id: 6,
          },
          {
            header: "The Magician",
            body: `Now that we learned about how body affects mind, it's time for us to dive into the imagination realm.
  
            Imagination is key to success. Imagination can release a powerfull social mindset.`,
            image: <img className="image-challenge" src={""}/>,
            id: 7,
          },
          {
          header: "Role Model",
          body: `Now I want you to think about 3 people who you can model their actions. 
          Write down their names, we'll use them as models to achieve your goals. 
          Reflect about their values and beliefs  . In time of doubts, ask yourself: what would they do? `,
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
