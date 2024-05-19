// HomeCard.jsx
import styled from "styled-components";

const HomeCardContainer = styled.div`
  background-color: ${(props) => props.bgColor || "#ffffff"};
  border-radius: var(--main-radius);
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  img {
    width: 1080px;
    height: 560px;
    z-index: 2;
    margin-top: 1em;
  }

  h2 {
    z-index: 1;
    color: #ebead4;
    -webkit-text-stroke-width: 1.5px;
    -webkit-text-stroke-color: #ebead4;
    font-family: Inter;
    font-size: 32px;
    font-style: normal;
    font-weight: 100;
    line-height: normal;
    margin-top: 7em;
    margin-left: 5em;
    margin-right: 5em;
  }
`;

function HomeCard({ title, image, bgColor }) {
  return (
    <HomeCardContainer bgColor={bgColor}>
      <h2>{title}</h2>
      <img src={image} />
    </HomeCardContainer>
  );
}

export default HomeCard;