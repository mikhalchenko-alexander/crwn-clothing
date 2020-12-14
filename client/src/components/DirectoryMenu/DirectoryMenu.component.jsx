import React from 'react';
import { connect } from 'react-redux';
import MenuItem from './MenuItem/MenuItem.component';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory-selectors';
import { DirectoryMenuContainer } from './DirectoryMenu.styles';

const DirectoryMenu = ({ directorySections }) => (
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

const mapStateToProps = createStructuredSelector({
  directorySections: selectDirectorySections
});

export default connect(mapStateToProps)(DirectoryMenu);
