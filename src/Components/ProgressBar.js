import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';



const ProgressBar = ({text}) => {

    const [ progress, setProgress] = useState("");

  
  
  
  
  

    useEffect(()=>{
           setProgress(
      function widthUpdate (){
        let width = "0rem";
       
     
            switch(text.id){
            case 3:
            let jonas = {width: "2rem"};      
    
            break;   
         
            case 4: 
            width = "6rem";
     
            break;


            }
            return <div className="internalProgress" style={{}}>{widthUpdate}</div>;
        }       )
    }, [])



           
            
        
           /*
            let you = getComputedStyle(trans).setProperty.width({widthnum});
      */
   
            /*
            let tro = document.getElementsByClassName("internalProgress");
            let vamo = () => tro[0].setProperty("width", () =>calculation());
            */
       
      
      
               
             /*   let amplo = ref.current.style = "width: 3rem"; */
                /*    let trans = document.querySelector(".internalProgress")*/
        
           
     
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
