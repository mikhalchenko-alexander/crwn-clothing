import React from 'react';
import { connect } from 'react-redux';
import MenuItem from './MenuItem/MenuItem.component';
import './DirectoryMenu.styles.scss';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory-selectors';

const DirectoryMenu = ({ directorySections }) => (
  <div className="directory-menu">
    {
      directorySections.map(
        ({ id, ...otherSectionProps }) =>
          <MenuItem
            key={ id }
            { ...otherSectionProps }
          />
      )
    }
  </div>
);

const mapStateToProps = createStructuredSelector({
  directorySections: selectDirectorySections
});

export default connect(mapStateToProps)(DirectoryMenu);
