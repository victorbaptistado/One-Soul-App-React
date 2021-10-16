import React from 'react'

const Buttons = (nextText) => {
    return (
        <div>
            <button className="btnIntro" onClick={nextText}>Social Development</button>
            <button className="btnIntro">Physical Development</button>
            <button className="btnIntro">Self Development</button>
        </div>
    )
}

export default Buttons
