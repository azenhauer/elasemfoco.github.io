// HomeCard.jsx
import styled from "styled-components";

import React from "react";


const HomeCardContainer = styled.div`
 

  
 
  margin-top: 5em;
  margin-bottom: 5em;
  background-color: ${(props) => props.color};
  
  padding-top: 2em;
 
  gap: 3em;
  padding-bottom: 4em;
 
  display: flex;
  flex-wrap: wrap;
  
  justify-content: center;

  
  position: relative;

  img {
    border-radius: var(--main-radius);
    scroll-snap-align: center;
   object-fit: cover;

    
    max-height: 560px;
    
   
    
     
    
  }

  h3 {
   
    display: flex;
   
   
    text-align: center;
    
    width: 70%;
   
    font-style: italic;
    
    flex-wrap: wrap;

    z-index: 1;
    color: #ebead4;

    font-family: Inter;
    font-size: clamp(1rem, 3vw, 2rem);
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    
   
   
    
  }
`;

  function HomeCard({ image, title, color }) {
  return (
    <HomeCardContainer >
      <div className=" flex justify-center items-center w-full ">
      <h3 className="flex justify-center">{title}</h3>
      </div>

      <div className=" flex justify-center ">
        
      <img src={image} alt={title} />
      
      </div>
      
    </HomeCardContainer>
  );
};

export default HomeCard;