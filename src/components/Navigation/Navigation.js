import React from "react";

const Navigation = ({routeChange, signedin}) => {
    if(signedin){
        return(
        <nav style={{display: 'flex', justifyContent:'flex-end'}}>
            <p onClick={() => routeChange('signout')} className='f3 link black underline pa3 pointer'>Sing out</p>
        </nav>
        );
    } else {
    return(
        <nav style={{display: 'flex', justifyContent:'flex-end'}}>
            <p onClick={() => routeChange('signin')} className='f3 link black underline pa3 pointer'>Signin</p>
            <p onClick={() => routeChange('register')} className='f3 link black underline pa3 pointer'>Register</p>
        </nav>
    );
    } 
}

export default Navigation;