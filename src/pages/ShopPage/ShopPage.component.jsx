import React from 'react';
import { Route } from 'react-router-dom';
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CollectionOverviewContainer from '../../components/CollectionOverview/CollectionsOverview.container';
import CollectionPageContainer from '../CollectionPage/CollectionPage.container';
import { createFetchCollectionsStartedAction } from '../../redux/shop/shop-actions';

class ShopPage extends React.Component {

  componentDidMount() {
    const { fetchCollectionsStart } = this.props;
    fetchCollectionsStart();
  }

  render() {
    const { match } = this.props;
    return (
      <div className='shop-page'>
        <Route exact path={ `${ match.path }` }
               component={ CollectionOverviewContainer } />
        <Route path={ `${ match.path }/:collectionId` }
               component={ CollectionPageContainer } />
      </div>
    );
  }
}

ShopPage.propTypes = { match: PropTypes.any };

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(createFetchCollectionsStartedAction())
});

export default connect(null, mapDispatchToProps)(ShopPage);
