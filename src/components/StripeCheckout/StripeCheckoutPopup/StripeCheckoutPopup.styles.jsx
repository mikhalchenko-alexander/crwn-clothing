import styled from 'styled-components';
import { ButtonContainer } from '../../Button/Button.styles';

export const StripeCheckoutPopupContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StripeCheckoutButtonContainer = styled(ButtonContainer)`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border-color: white;
  }
`;

export const CheckoutFormContainer = styled.form`
  width: 500px;
  background-color: black;
  padding: 10px;
  color: white;
  font-size: 18px;
  
  .StripeElement {
    box-sizing: border-box;

    height: 40px;

    padding: 10px 12px;

    border: 1px solid transparent;
    background-color: white;

    box-shadow: 0 1px 3px 0 #e6ebf1;
    -webkit-transition: box-shadow 150ms ease;
    transition: box-shadow 150ms ease;
  }

  .StripeElement--focus {
    box-shadow: 0 1px 3px 0 #cfd7df;
  }

  .StripeElement--invalid {
    border-color: #fa755a;
  }

  .StripeElement--webkit-autofill {
    background-color: #fefde5 !important;
  }
`;

export const StripeCheckoutButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  #close-button {
    margin-right: 10px;
  }
`;

export const CardErrorsContainer = styled.div`
  color: #fa755a;
  margin-bottom: 5px;
`;
