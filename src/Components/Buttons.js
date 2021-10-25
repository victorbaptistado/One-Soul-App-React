import React from 'react';


const Buttons = ({text, nextArray}) => {



    return (


        <div>
            
            <button className="btnIntro" onClick={()=>nextArray(text.id)}>Social Development</button>
            <button className="btnIntro">Physical Development</button>
            <button className="btnIntro">Self Development</button>
            
        </div>
          
    )
            
}

export default Buttons
