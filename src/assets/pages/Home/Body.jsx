// Body.jsx
import React from 'react';
import ImgHp from './HomeImages/homepg-img1.jpeg';
import HomeCard from '../../Components/HomeCard.jsx';
import ImgHp2 from './HomeImages/homepg-img2.jpeg';
import ImgHp3 from './HomeImages/homepg-img3.png';


const Body = () => {
  return (
    
    <div id="cards-container" className='max-w-full '>
      


  
       
          <HomeCard 
            
            image={ImgHp3}
            title="As pessoas dançam porque a dança pode mudar coisas,"
            />
        

        
            <HomeCard color={"rgb(12 10 9);"}
            
              
              image={ImgHp2}
              title="um passo pode mudar pessoas, um movimento pode ter e fazer acreditar que é especial."
            />
           

           
              <HomeCard
              
               
                image={ImgHp}
                title="Um movimento pode Libertar todas as gerações."
              />
           
     
    </div>
  );
};

export default Body;