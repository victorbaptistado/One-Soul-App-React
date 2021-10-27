import React, { useState } from 'react';
import Buttons from './Buttons';
import Text from './Text';
import firstImage from "./Images/Challenges/01-Yoga-Lady.png"
//import Text from './Text';

const Texts = () => {

    const [texts, setText] = useState([
        {
          header: "Are you ready?",
          body: "Welcome to your very first challenge! I guarantee you your life will change.",
         
          challengeChoice: "Choose your challenge: ",
          id: 1,

        },
        {
          header: "Instructions",
          body: "Body",
          image: <img className="image-challenge" src={firstImage}/>,
          id: 2,

        }])

      const [count, setCount] = useState(1);
      
      let textFilt = texts.filter(text => text.id === count) ;


  

    return (
      textFilt.map(text => 
      <div key={text.id}>
        <Text text={text} count={count} />
       {count === 1 ? <Buttons key={text.id} count={count} setCount={setCount}/>: ""}
       </div>
      )
        
    );
      }

export default Texts
