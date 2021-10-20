import React from 'react'
import Text from './Text'
import { useState } from 'react'

const Texts = () => {

    const [texts, setText] = useState([
        {
          header: "Are you ready?",
          body: "Welcome to your very first challenge! I guarantee you your life will change.",
          challengeChoice: "Choose your challenge: ",
          id: 1,
          condition: true
        },
        {
          header: "Instructions",
          body: "Body",
          challengeChoice: "",
          id: 2,
          condition: false
        }])
    


        let textShow = () => {setText(texts.filter((text) => text.condition))};
       
console.log(textShow);

    return (
        <>
         {texts.map ((text) => (
        <Text key={text.id} text={text} textShow={textShow}/>))}
    
        </>
    )
    }

export default Texts
