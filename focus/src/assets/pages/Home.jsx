import React from "react";
import NavBar from "../Components/NavBar"; 
import BgImage from "../images/background.png";
import ImgHp from "../images/homepg-img1.jpg";
import "../Components/CSSfiles/Home.css";
import { Link } from "react-router-dom";


function Home() {
  return (
    <div className="Home-container">
      <div className="rectangle"></div>
      <NavBar>
      </NavBar>
      <img className="background-image" src={BgImage}/>
      
      
      <div className="content-container">

        <h1>Projeto com foco no empoderamento feminino através das Artes Urbanas e Cultura Hip-Hop</h1>

        <div className="button-wrapper">
          
          <Link to="/sobre">
              <span className="conheça-button">Saiba mais</span>
          </Link>
      
      </div>

      <div className="page-content">

        <img className="home-img1" src={ImgHp} />


        
      </div>



    </div>
    
    
    
    
    
    
    
    
    
    
    </div>
  











);
}

export default Home;