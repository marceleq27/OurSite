import React from 'react';
import styled from 'styled-components';
import portfolioIcon from 'assets/Portfolio_Icon.png';
import Carousel from 'nuka-carousel';
import Button from 'components/Button';

const StyledPicture = styled.div`
  width: 64px;
  height: 64px;
  background-color: ${({ theme }) => theme.blue};
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
  color: ${({ theme }) => theme.blue};
  font-size: 24px;
  margin: 20px 0;
  text-align: center;
`;

const StyledDiv = styled.div`
  height: 100%;
  width: 80%;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.blue};
  margin: 0 auto;
  padding: 30px;
  text-align: center;
  h4 {
    font-size: 24px;
    color: #fff;
    font-weight: bold;
    padding: 10px 0 15px;
  }
  p {
    color: #fff;
    line-height: 19px;
    margin-bottom: 40px;
  }
`;

const PictureDiv = styled.div`
  border-radius: 50%;
  background-color: #ccc;
  margin: 10px auto;
  width: 138px;
  height: 138px;
`;

const OurWorkView = () => {
  return (
    <section>
      <StyledPicture>
        <img src={portfolioIcon} alt="portfolioicon" />
      </StyledPicture>
      <StyledH>Nasze Prace</StyledH>
      <Carousel>
        <StyledDiv>
          <PictureDiv />
          <h4>GrawerniaDDZ</h4>
          <p>
            Sklep Internetowy <br />
            Reklama <br />
            Branding
          </p>
          <Button secondary="#FF8B8B" width="100%">
            Sprawdź naszą pracę...
          </Button>
        </StyledDiv>
        <StyledDiv>
          <PictureDiv />
          <h4>GrawerniaDDZ</h4>
          <p>
            Sklep Internetowy <br />
            Reklama <br />
            Branding
          </p>
          <Button secondary="#FF8B8B" width="100%">
            Sprawdź naszą pracę...
          </Button>
        </StyledDiv>
        <StyledDiv>
          <PictureDiv />
          <h4>GrawerniaDDZ</h4>
          <p>
            Sklep Internetowy <br />
            Reklama <br />
            Branding
          </p>
          <Button secondary="#FF8B8B" width="100%">
            Sprawdź naszą pracę...
          </Button>
        </StyledDiv>
      </Carousel>
    </section>
  );
};

export default OurWorkView;
