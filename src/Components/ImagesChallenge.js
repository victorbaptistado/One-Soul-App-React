import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const ImagesChallenge = ({text}) => {

const [imageSize, setImageSize] = useState("")


    const increaseSize = () =>
    setImageSize(
    <>
    <div className="image-challenge-increase">
    <button onClick={() => setImageSize("")}><FontAwesomeIcon icon={faTimesCircle} style={{fontSize: "3rem", color: "red"}}/></button>
    {text.image}
    </div>
    </>
    );

    return (
        <>
     
        {text.image} 
     
        <button style={{borderRadius:"3rem", marginLeft:"35%", backgroundColor:"white", cursor:"pointer"}} onClick={() => increaseSize()}><FontAwesomeIcon icon={faPlus} style={{fontSize:"2rem", color:"green"}} /></button>
        <h5 style={{marginLeft:"23%"}}>Maximize image</h5>
        {imageSize}
        
     </>
        

    )
}

export default ImagesChallenge
