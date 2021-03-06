import styled from 'styled-components';

export const BackgroundImageContainer = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${ ({ imageUrl }) => `url(${ imageUrl })` };
`;

export const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  button {
    width: 80%;
    opacity: 0.85;
    position: absolute;
    top: 255px;
    display: none;
  }

  &:hover {

    ${ BackgroundImageContainer.selector } {
      opacity: 0.8;
    }

    button {
      display: flex;
    }

  }
`;

export const FooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const NameContainer = styled.div`
  width: 90%;
  margin-bottom: 15px;
`;

export const PriceContainer = styled.div`
  width: 10%;
  text-align: right;
`;
