import styled from "styled-components";

import ImgHp from "./HomeImages/homepg-img1.jpeg";

import HomeCard from "../../Components/HomeCard.jsx";
import imgHp2 from "./HomeImages/homepg-img2.jpeg";
import ImgHp3 from "./HomeImages/homepg-img3.png";


const BodyContainer = styled.div`	


div {
  
  height: 705px;
  display: flex;
  width: 1700px;
  
  position: relative;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20em;
  
}

`


function Body() {
  return (
    
    <BodyContainer>
      
     

{/* image 1 */}
<HomeCard image={ImgHp} title="As pessoas dançam porque a dança pode mudar coisas," bgColor="rgba(44, 0, 23, 0.3)" />

   
    
{/* image 2 */}
<HomeCard image={imgHp2} title="um passo pode mudar pessoas, um movimento pode ter e fazer acreditar que é especial." bgColor="rgba(67, 5, 27, 0.3)" />



{/* image 3 */}
<HomeCard image={ImgHp3} title="Um movimento pode libertar todas as gerações.”" bgColor="rgba(54, 4, 21, 0.5)"/>


  </BodyContainer>
  
);
}
  


export default Body;