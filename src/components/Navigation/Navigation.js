import React from "react";

const Navigation = ({routeChange}) => {
    return(
        <nav style={{display: 'flex', justifyContent:'flex-end'}}>
            <p onClick={() => routeChange('signin')} className='f3 link black underline pa3 pointer'>Sing out</p>
        </nav>
    );   
}

export default Navigation;