import React from 'react';
import styled from 'styled-components';
import brain from 'assets/Brain_Icon.png';
import Button from 'components/Button';
import bgc2 from 'assets/Flat_4.png';

const StyledSection = styled.section`
  margin-top: 50px;
`;

const StyledPicture = styled.picture`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: ${({ theme }) => theme.darkred};
  border-radius: 50%;
  width: 64px;
  height: 64px;
  padding: 10px;
  margin: 0 auto;
  img {
    max-width: 100%;
    height: auto;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 80%;
  margin: 10px auto;
`;

const StyledH = styled.h2`
  font-weight: 400;
  padding: 5px 0 0;
  color: ${({ theme }) => theme.darkred};
`;

const StyledP = styled.p`
  margin: 15px 0;
  line-height: 24px;
  color: ${({ theme }) => theme.grey};
  text-align: center;
`;
const StyledImg = styled.img`
  position: relative;
  max-width: 90%;
  height: auto;
  margin-top: 50px;
`;
const HowWeWorkView = () => {
  return (
    <StyledSection>
      <StyledPicture>
        <img src={brain} alt="iconBrain" />
      </StyledPicture>
      <StyledDiv>
        <StyledH>Jak działamy?</StyledH>
        <StyledP>
          Do każdego klienta podchodzimy indywidualnie. Dobieramy idealny plan do Twojego budżetu.
        </StyledP>
        <StyledH as="h3" style={{ fontSize: 20 }}>
          Lorem Ipsum
        </StyledH>
        <StyledP>
          Jesteśmy młodymi ludźmi, których pasją jest tworzenie biznesu Online. Zajmujemy się:
        </StyledP>
        <StyledH as="h3" style={{ fontSize: 20 }}>
          Lorem Ipsum
        </StyledH>
        <StyledP>
          Jesteśmy młodymi ludźmi, których pasją jest tworzenie biznesu Online. Zajmujemy się:
        </StyledP>
      </StyledDiv>
      <Button secondary="#F25157">Zacznijmy współpracę!</Button>
      <StyledImg src={bgc2} alt="bgc" />
    </StyledSection>
  );
};

export default HowWeWorkView;
