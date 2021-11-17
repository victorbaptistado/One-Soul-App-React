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
    {text.image}</div>
    </>
    );

    return (
<>
        <div className="image-challenge">
        {text.image} 
        </div>
        {imageSize}
        <button onClick={() => increaseSize()}><FontAwesomeIcon icon={faPlus} /></button>
</>
        

    )
}

export default ImagesChallenge
