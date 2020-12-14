import React from 'react';
import { withRouter } from 'react-router-dom';
import {
  BackgroundImageContainer,
  ContentContainer,
  MenuItemContainer,
  SubtitleContainer,
  TitleContainer
} from './MenuItem.styles';

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => (
  <MenuItemContainer
    size={ size }
    onClick={ () => history.push(`${ match.url }${ linkUrl }`) }
  >
    <BackgroundImageContainer
      className="background-image"
      imageUrl={ imageUrl }
    />
    <ContentContainer>
      <TitleContainer>{ title.toUpperCase() }</TitleContainer>
      <SubtitleContainer>SHOP NOW</SubtitleContainer>
    </ContentContainer>
  </MenuItemContainer>
);

export default withRouter(MenuItem);
