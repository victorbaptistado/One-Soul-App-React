import React from 'react'

const Text = ({text}) => {


 //   textShow() 
 
    return (

       <div  key={text.id}>  
    
        <h2 >{text.header}</h2>
        <h3 >{text.body}</h3>
        
        </div>
    )
}

export default Text
