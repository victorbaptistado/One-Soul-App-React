import React, { useState } from 'react';
import Buttons from './Buttons';
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
          challengeChoice: "",
          id: 2,

        }])

      const [count, setCount] = useState(1);
      
      let textFilt = texts.filter(text => text.id === count) ;


  

    return (
    
      textFilt.map(text => 
      <div key={text.id}>

       <h2 >{text.header}</h2>
       <p>{text.body}</p>
       <h2>{text.challengeChoice}</h2>
       {count === 1 ? <Buttons key={text.id} count={count} setCount={setCount}/>: ""}
       </div>
      )
      
        
    );
      }

export default Texts
