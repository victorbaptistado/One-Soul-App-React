import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const ProgressBar = ({text}) => {



    const [ progress, setProgress] = useState("");


    useEffect(() => {
        setProgress(
            function calculation (){
                const elements = []; 
            for(let i = 0; i < text.id; i++)
            {
                let corno = elements.push(<div>hi</div>)
                return corno++;
                
            }}
     ) }, [])
 


    /*
    function hi(){
    for (const i = 0; i <= text.id; i++){
    text.internalProgress++;
    return text.internalProgress;  
    }})}
*/

    return (
  <>
    <div className="externalProgress" >
    {progress}           

    </div> 
        </>
    )
}

export default ProgressBar
