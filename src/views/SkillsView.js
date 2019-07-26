import React from 'react';
import styled from 'styled-components';
import powericon from 'assets/Power_Icon.png';
import IconAnalytics from 'assets/Icon1.png';
import IconHTML from 'assets/Icon_3.png';
import IconEye from 'assets/Icon_2.png';
import bgc from 'assets/Flat_5.png';

const StyledSection = styled.section`
  margin: 0 auto;
`;

const StyledPicture = styled.div`
  width: 64px;
  height: 64px;
  background-color: ${({ theme }) => theme.darkred};
  border-radius: 50%;
  padding: 13px;
  margin: 0 auto;
  img {
    max-width: 100%;
    height: auto;
  }
`;
const StyledH = styled.h2`
  font-weight: 400;
  padding: 15px 0 0;
  color: ${({ theme }) => theme.darkred};
  text-align: center;
`;

const StyledP = styled.p`
  margin: 15px auto;
  line-height: 24px;
  color: ${({ theme }) => theme.grey};
  text-align: center;
  width: 80%;
`;

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  li {
    list-style: none;
    margin: 20px 0;
    text-align: center;
    img {
      max-width: 35%;
      height: auto;
      display: block;
      margin: 0 auto;
    }
    h3 {
      font-weight: 400;
      color: ${({ theme }) => theme.darkblue};
      margin: 15px 0 0;
      font-size: 20px;
    }
    p {
      padding: 10px 0;
      line-height: 20px;
      color: ${({ theme }) => theme.grey};
    }
  }
`;

const StyledImg = styled.img`
  max-width: 100%;
  height: auto;
`;
const SkillsView = () => {
  return (
    <StyledSection>
      <StyledPicture>
        <img src={powericon} alt="powericon" />
      </StyledPicture>
      <StyledH>Nasze Umiejętności</StyledH>
      <StyledP>
        Wolny czas w domu poświęcamy na ciągłe doskonalenie naszych umiejętności i poszerzanie
        naszej wiedzy w temacie.
      </StyledP>
      <StyledUl>
        <li>
          <img src={IconAnalytics} alt="IconAnalytics" />
          <h3>Analityka</h3>
          <p>
            Narzędzia do pozycjonowania <br />
            Strony przyjazne dla Google <br />
            Wysokie wyniki
          </p>
        </li>
        <li>
          <img src={IconHTML} alt="IconHTML" />
          <h3>Technologie</h3>
          <p>
            React <br />
            Html 5 <br />
            SCSS
          </p>
        </li>
        <li>
          <img src={IconEye} alt="IconEye" />
          <h3>UI/UX</h3>
          <p>
            Responsywny design <br />
            Najnowsze trendy <br />
            Wireframing
          </p>
        </li>
      </StyledUl>
      <StyledImg src={bgc} alt="bgc5" />
    </StyledSection>
  );
};

export default SkillsView;
