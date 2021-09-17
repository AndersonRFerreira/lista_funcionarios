import React from 'react';
import logo from '../Img/logo.png';

function Navbar (){
    return(
        <div className="navbar">
             <img className="logo" src={logo} alt="Be mobile"></img>
        </div>   
    );
}

export default Navbar;