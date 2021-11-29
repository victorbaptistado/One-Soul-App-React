import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';



const ProgressBar = ({text}) => {

    const [ progress, setProgress] = useState("");

  
  
  
  
  

    useEffect(()=>{
        setProgress(
      function widthUpdate(){

    const widthlol = getComputedStyle(document.documentElement()).getPropertyValue("width");

        /*let width = "0rem";*/
          function kor (){
         
            switch(text.id){
            case 3:
            return widthlol;      
            }
         
         /*
            case 4: 
            width = "6rem";
     
            break;
          }}})
         /*
           <div className="internalProgress" style={{width: {lucas}}}>{width}</div>}*/
            
    }})}, []);      
            
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
    <div className="internalProgress" style={{width: {progress}}}>{progress}</div>
    </div> 
        </>
    )
}

export default ProgressBar
