import React from 'react'
import Text from './Text'

const Texts = () => {

    const texts = [
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
        }
        ]

    const currentText = texts.filter((text) => text.condition !== false)
        console.log(currentText)
    
    return (
        <>
            <Text text={currentText} />
        </>
    )
    }

export default Texts
