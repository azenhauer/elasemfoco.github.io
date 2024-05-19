import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import Body from "./Body.jsx";
import BgImage from "./HomeImages/background.png";
import "./Home.css";
import { Link } from "react-router-dom";



function Home() {
  return (
  
   
     

    <div className="Home-container">
       <div className="rectangle"></div>
      
      <NavBar>
      </NavBar>
      <img className="background-image" src={BgImage}/>
      
      
      <div className="content-container">


      <div className="button-wrapper">
          
          <Link to="/sobre">
              <span className="conheça-button">Saiba mais</span>
          </Link>    
      </div>

        <div className="quote-wrapper">

        <h1>Projeto com foco no empoderamento feminino através das Artes Urbanas e Cultura Hip-Hop</h1>

        </div>

       

      <Body></Body>
      



    </div>
    
    
    
    
    
    
    
    
    
    
    </div>
  











);
}

export default Home;