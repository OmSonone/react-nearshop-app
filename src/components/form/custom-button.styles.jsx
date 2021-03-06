import styled, { css } from "styled-components";

const buttonStyles = css`
  background-color: black;
  border: none;
  height: 50px;
 
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const invertedButtonStyles = css`
  border: 1px solid black;
  background-color: black;
  color: white;
  height: 70px;
  &:hover {
    background-color: white;
    color: black;
  }
`;

const googleSigninStyles = css`
  background-color: #4285f4;
  height: 50px;
  padding: 10px;
  &:hover {
    background-color: white;
    color:black;
  }
`;

const getButtonStyles = (props) => {
  if (props.googleSignin) {
    return googleSigninStyles;
  }

  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  min-width: 180px;
  width: 100%;
  height: 70px;
  letter-spacing: 0.5px;
  padding: 0 35px;
  font-size: 20px;

  cursor: pointer;
  border: none;
  color: white;

  ${getButtonStyles}
`;
