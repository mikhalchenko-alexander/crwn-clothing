import React from 'react';
import { Route } from 'react-router-dom';
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { crateFetchCollectionsStartedAsyncAction } from '../../redux/shop/shop-actions';
import CollectionOverviewContainer from '../../components/CollectionOverview/CollectionsOverview.container';
import CollectionPageContainer from '../CollectionPage/CollectionPage.container';

class ShopPage extends React.Component {

  componentDidMount() {
    const { fetchCollectionsAsync } = this.props;
    fetchCollectionsAsync();
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
  fetchCollectionsAsync: () => dispatch(crateFetchCollectionsStartedAsyncAction())
});

export default connect(null, mapDispatchToProps)(ShopPage);
