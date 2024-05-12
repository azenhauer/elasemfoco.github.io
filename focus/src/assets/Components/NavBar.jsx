import React from "react";
import { Link } from 'react-router-dom';
import './CSSfiles/NavBar.css'
import img1 from '../../assets/images/logo.png'

function NavBar() {


    
    return (
        <div>

    <nav >

    <ul>
    <li className="home"><Link to="/">HOME</Link></li>
    <li className="sobre"><Link to="/sobre">SOBRE</Link></li>
    <img className="logo" src={img1} alt="home" />
    <li className="midias"><Link to="/midias">MIDIAS</Link></li>
    <li className="shows"><Link to="/shows">APRESENTAÇÕES</Link></li>
    </ul>

    </nav>
            
        </div>
    )
    





}

export default NavBar