import React from 'react';
import styled from 'styled-components';
import icon from 'assets/info.png';
import checkIcon from 'assets/check.png';
import Button from 'components/Button';
import bgc1 from 'assets/Flat_3.png';

const StyledPicture = styled.picture`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  h2 {
    font-weight: 400;
    padding: 10px 0;
    color: ${({ theme }) => theme.lightblue};
  }
  ul {
    li {
      list-style: none;
      line-height: 36px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      img {
        margin-right: 15px;
      }
      p {
        text-align: center;
        color: ${({ theme }) => theme.grey};
        flex-basis: 90%;
      }
    }
  }
`;

const StyledImg = styled.img`
  position: relative;
  right: -10%;
  max-width: 90%;
  height: auto;
  margin-top: 50px;
`;
const StyledP = styled.p`
  margin: 15px 0;
  line-height: 24px;
  color: ${({ theme }) => theme.grey};
  text-align: center;
`;

const StyledButton = styled(Button)`
  margin: 15px auto;
`;

const AboutUsView = () => {
  return (
    <section>
      <StyledPicture>
        <img src={icon} alt="icon" />
      </StyledPicture>
      <StyledDiv>
        <h2>O nas</h2>
        <StyledP>
          Jesteśmy młodymi ludźmi, których pasją jest tworzenie biznesu Online. <br />
          Zajmujemy się:
        </StyledP>
        <ul>
          <li>
            <img src={checkIcon} alt="check" />
            <p>Sklepy internetowe</p>
          </li>
          <li>
            <img src={checkIcon} alt="check" />
            <p>Strony internetowe</p>
          </li>
          <li>
            <img src={checkIcon} alt="check" />
            <p>Pozycjonowanie</p>
          </li>
          <li>
            <img src={checkIcon} alt="check" />
            <p>Reklama</p>
          </li>
          <li>
            <img src={checkIcon} alt="check" />
            <p>Branding</p>
          </li>
          <li>
            <img src={checkIcon} alt="check" />
            <p>UI/UX</p>
          </li>
        </ul>
      </StyledDiv>
      <StyledButton secondary="#339CC7">Zacznijmy współpracę!</StyledButton>
      <StyledImg src={bgc1} alt="bgc" />
    </section>
  );
};

export default AboutUsView;
