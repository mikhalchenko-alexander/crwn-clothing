import styled, { css } from 'styled-components';

const DefaultButtonStyles = css`
  background-color: black;
  color: white;
  border: none;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const GoogleSignInButtonStyles = css`
  background-color: #4285f4;
  color: white;
  border: none;

  &:hover {
    background-color: #357ae8;
    color: white;
    border: none;
  }
`;

const DefaultButtonInvertedStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

export const ButtonStyles = {
  DEFAULT: DefaultButtonStyles,
  DEFAULT_BUTTON_INVERTED: DefaultButtonInvertedStyles,
  GOOGLE_SIGN_IN: GoogleSignInButtonStyles
};

export const ButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: "Open Sans Condensed", sans-serif;
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  ${ props => props.buttonStyle || ButtonStyles.DEFAULT }
`;
