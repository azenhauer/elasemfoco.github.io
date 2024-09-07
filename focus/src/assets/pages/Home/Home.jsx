import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import Body from "./Body.jsx";
import BgImage from "./HomeImages/background.png";
import "./Home.css";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer.jsx";





function Home() {
  
  return (
  
   
     

    <div  className="Home-container">
            
         
            <NavBar>
            </NavBar>
            
          
          
                  
                            
                      <div id="homebody-container" className="flex flex-col items-center">
                        
                        
                        <img className="flex justify-center flex-1 object-cover" src={BgImage}/>
                            
                            
                            {/* h2 text  + button */}
                        <div className="flex flex-col items-center flex-shrink max-w-full gap-1 flex-wrap justify-center pb-6 bg-[#1e1015] rounded-[var(--main-radius)] px-8  "> 
                          
                            <h2 id="quote-homepage" className="flex px-8 justify-center  flex-wrap tracking-wide  text-center  whitespace-pre-wrap py-3 text-2xl ">Projeto com foco no empoderamento feminino através das Artes Urbanas <span className="w-full">e Cultura Hip-Hop</span></h2>
                            
                            <div className="button-wrapper">
                                <Link to="/sobre">
                                    <span className="conheça-button">Saiba mais</span>
                                </Link>    
                            </div>

                        </div>

          

                      </div>
        
      <Body></Body>
      <Footer></Footer>
    </div>
  











);
}

export default Home;