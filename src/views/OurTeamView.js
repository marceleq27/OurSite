import React from 'react';
import styled from 'styled-components';
import teamicon from 'assets/Team_Icon.png';

const StyledSection = styled.section`
  margin-bottom: 50px;
`;

const StyledDiv = styled.div`
  width: 64px;
  height: 64px;
  background-color: ${({ theme }) => theme.darkblue};
  border-radius: 50%;
  padding: 13px;
  margin: 0 auto;
  img {
    max-width: 100%;
    height: auto;
  }
`;

const StyledH = styled.h3`
  font-weight: 400;
  color: ${({ theme }) => theme.darkblue};
  font-size: 24px;
  margin: 20px 0;
  text-align: center;
`;

const DivBox = styled.div`
  width: 96px;
  height: 96px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.grey};
`;
const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  li {
    list-style: none;
    display: flex;
    margin: 20px 0;
    align-items: center;
    justify-content: center;
  }
`;

const DivText = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  padding-left: 15px;
  h4 {
    margin-bottom: 15px;
    font-size: 20px;
    color: ${({ theme }) => theme.darkblue};
    font-weight: normal;
  }
  p {
    color: ${({ theme }) => theme.grey};
  }
`;
const OurTeamView = () => {
  return (
    <StyledSection>
      <StyledDiv>
        <img src={teamicon} alt="teamicon" />
      </StyledDiv>
      <StyledH>Nasza Drużyna</StyledH>
      <StyledUl>
        <li>
          <DivBox />
          <DivText>
            <h4>Wojciech Smoła</h4>
            <p>UI/UX Designer</p>
          </DivText>
        </li>
        <li>
          <DivBox />
          <DivText>
            <h4>Marcel Bednarz</h4>
            <p>Front End Developer</p>
          </DivText>
        </li>
      </StyledUl>
    </StyledSection>
  );
};

export default OurTeamView;
