import styled from 'styled-components';
import { ButtonContainer } from '../../components/Button/Button.styles';

export const CheckoutPageContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto;
`;

export const CheckoutHeaderContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

export const HeaderBlockContainer = styled.div`
  text-transform: capitalize;
  width: 23px;
  
  &:last-child {
   width: 8%;
  }
`;

export const TotalContainer = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 35px;
`;

export const StripeCheckoutButtonContainer = styled(ButtonContainer)`
    margin-top: 30px;
    margin-left: auto;
`;
