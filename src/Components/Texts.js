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
    
      
      let currentId = 1;




      let textFilt = texts.filter(text => text.id === currentId) ;

      function nextArray (id) {
    
        setText(textFilt.filter(text => text.id === 2))
      
      }      
      


    return (
    
      textFilt.map(text => 
      <div key={text.id}>

       <h2 >{text.header}</h2>
       <p>{text.body}</p>
       <h2>{text.challengeChoice}</h2>
       <Buttons key={text.id} text={text} nextArray={nextArray}/>
       </div>
      )
      
        
    );
      }

export default Texts
