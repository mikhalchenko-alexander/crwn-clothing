import React from 'react';
import { useSelector } from 'react-redux';
import MenuItem from './MenuItem/MenuItem.component';
import { selectDirectorySections } from '../../redux/directory/directory-selectors';
import { DirectoryMenuContainer } from './DirectoryMenu.styles';

const DirectoryMenu = () => {
  const directorySections = useSelector(selectDirectorySections);

  return (
    <DirectoryMenuContainer>
      {
        directorySections.map(
          ({ id, ...otherSectionProps }) =>
            <MenuItem
              key={ id }
              { ...otherSectionProps }
            />
        )
      }
    </DirectoryMenuContainer>
  );
};

export default DirectoryMenu;
