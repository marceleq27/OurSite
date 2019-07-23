import React from 'react';
import bgc1 from 'assets/Flat_1.png';
import styled from 'styled-components';
import Button from 'components/Button';

const StyledSection = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledDiv = styled.div`
  position: relative;
  z-index: 5;
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 110px;
  color: ${({ theme }) => theme.grey};
  h1 {
    font-size: 36px;
    font-weight: 400;
    padding: 20px 0;
    span {
      color: ${({ theme }) => theme.blue};
    }
  }
  p {
    line-height: 24px;
    padding-bottom: 10px;
  }
`;

const StyledPicture = styled.picture`
  img {
    position: absolute;
    right: 0;
    top: 0;
    max-width: 90%;
    display: block;
    height: auto;
  }
`;

const HeroView = () => {
  return (
    <StyledSection>
      <StyledPicture>
        <img src={bgc1} alt="bgc1" />
      </StyledPicture>
      <StyledDiv>
        <h1>
          Połącz Sztukę Z <span>Technologią</span>
        </h1>
        <p>
          Pozwól nam pomóc stworzyć Twój biznes Online. Zajmujemy się projektowaniem i pisaniem
          stron internetowych przyjaznych dla użytkownika, sklepami internetowymi oraz wizerunkiem
          firmy.
        </p>
      </StyledDiv>
      <Button secondary="#F25157">Zacznijmy współpracę!</Button>
      <Button black="#707070" border="2px solid #339CC7">
        Bezpłatna wycena
      </Button>
    </StyledSection>
  );
};

export default HeroView;
