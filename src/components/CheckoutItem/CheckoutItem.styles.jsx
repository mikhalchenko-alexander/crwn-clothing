import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const ImageContainer = styled.div`
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const QuantityContainer = styled.div`
  display: flex;
`;

export const ArrowContainer = styled.span`
  cursor: pointer;
  user-select: none;
`;

export const ValueContainer = styled.span`
  margin: 0 10px;
`;

export const RemoveButtonContainer = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;

export const ColumnContainer = styled.div`
  width: 23%;
`;


