import React from "react";
import './facereco.css'

const Facereco = ({imgURL, box}) => {
    return(
        <div className='center ma2'>
            <div className='absolute mt2'>
            <img id='inputimage'alt='' src={imgURL} width='500px' height='auto'/>
            <div className="face-box" style={{top:box.toprow, bottom:box.bottomrow, right:box.rightcol, left:box.leftcol }} />
            </div>
    </div>
    );
}

export default Facereco;