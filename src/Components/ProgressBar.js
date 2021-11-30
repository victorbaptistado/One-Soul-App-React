import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';



const ProgressBar = ({text}) => {

    const [ progress, setProgress] = useState("");

  
  

    useEffect(()=>{
      
        setProgress(
      function widthUpdate(){        
            switch(text.id){
            case 3:
            return 30;      
            
         
            case 4: 
           return 40;
     
            case 5:
            return 50; 
            case 6:
              return 60;
            case 7:
            return 70;
            case 8:
            return 80;
            case 9:
              return 90;
            case 10:
            return 100;

                 
    }})}, []);      
         


    return (
  <>
    <div className="externalProgress" >
    <div className="internalProgress" style={{width: `${progress}%`}}>{progress}</div>
    </div> 
        </>
    )
}

export default ProgressBar
