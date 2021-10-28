import React from 'react';


const Buttons = ({  count, setCount }) => {



    return (


        <div className="btnColumns"> 
            <button className="btnIntro" onClick={()=> setCount(++ count)}> Social Development</button>   
            <button className="btnIntro"><img href=""/>Physical Development</button>
            <button className="btnIntro">Self Development</button>
         </div>

    )
             
}

export default Buttons
