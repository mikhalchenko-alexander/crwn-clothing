import styled, { css } from 'styled-components';

const subColor = 'grey';
const mainColor = 'black';

const shrinkLabel = css`
  top: -14px;
  font-size: 12px;
  color: ${mainColor};
`;

export const FormInputContainer = styled.div`
  position: relative;
  margin: 45px 0;  
`;

export const InputContainer = styled.input`
  background: white none;
  color: ${subColor};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subColor};
  margin: 25px 0;
  
  &:focus {
    outline: none;
  
    &~ label {
      ${shrinkLabel};
    }
  }
  
  &[type='password'] {
    letter-spacing: 0.3em;
  }
`;

export const LabelContainer = styled.label`
  color: ${subColor};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;
  ${ props => props.shrink && shrinkLabel }
`;
