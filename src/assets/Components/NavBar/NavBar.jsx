import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import './NavBar.css'
import img1 from "./logo.png"
import menu from "./Menu.png"
import close from "./Close.png"

function NavBar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div id="bar" className="flex w-full justify-center  flex-wrap">
            <div className="h-2 bg-pink-950 z-[9999] w-full"></div>
            
            <nav id="nav" className="flex w-full justify-center mb-4">
                <div className="menu-icons">
                    <img 
                        id="menu" 
                        className={`fixed z-[9999] max-w-10 top-6 left-2 transition-opacity duration-300 ${isSidebarOpen ? 'opacity-0' : 'opacity-100'}`} 
                        src={menu} 
                        alt="menu"
                        onClick={toggleSidebar}
                    />
                    <img 
                        id="close" 
                        className={`fixed z-[9999] max-w-10 top-6 left-2 transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100' : 'opacity-0'}`} 
                        src={close} 
                        alt="close"
                        onClick={toggleSidebar}
                    />
                </div>

                <ul className="main-bar">
                    <li className="nav-list"><NavLink to="/">PAGINA INICIAL</NavLink></li>
                    <li className="nav-list"><NavLink to="/sobre">SOBRE</NavLink></li>
                    <NavLink to='/'><img className="logo" src={img1} alt="home" /></NavLink>
                    <li className="nav-list"><NavLink to="/midias">MIDIAS</NavLink></li>
                    <li className="nav-list"><NavLink to="/shows">APRESENTAÇÕES</NavLink></li>
                </ul>
                
                <ul className={`sidebar ${isSidebarOpen ? 'sidebar--open' : ''}`}>
                    <li><NavLink to="/">PAGINA INICIAL</NavLink></li>
                    <li><NavLink to="/sobre">SOBRE</NavLink></li>
                    <li><NavLink to="/midias">MIDIAS</NavLink></li>
                    <li><NavLink to="/shows">APRESENTAÇÕES</NavLink></li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;