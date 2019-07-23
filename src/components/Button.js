import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
  background-color: ${props => props.secondary || '#fff'};
  display: block;
  border: ${props => props.border || 'none'};
  margin: 10px 0 7px;
  padding: 12px 0;
  width: 80%;
  font-size: 16px;
  border-radius: 15px;
  font-family: 'Montserrat', sans-serif;
  color: ${props => props.black || '#fff'};
  font-weight: 700;
  :hover {
    cursor: pointer;
  }
`;

const Button = ({ children, secondary, black, border }) => {
  return (
    <StyledButton secondary={secondary} black={black} border={border}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.string,
  secondary: PropTypes.string,
  black: PropTypes.string,
  border: PropTypes.string,
};
Button.defaultProps = {
  children: '',
  secondary: '',
  black: '',
  border: '',
};
export default Button;
