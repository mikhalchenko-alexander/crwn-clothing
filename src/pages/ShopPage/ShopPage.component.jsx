import React from 'react';
import CollectionsOverview from '../../components/CollectionOverview/CollectionsOverview.component';
import { Route } from 'react-router-dom';
import CollectionPage from '../CollectionPage/CollectionPage.component';
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { crateFetchCollectionsStartedAsyncAction } from '../../redux/shop/shop-actions';
import { WithSpinner } from '../../components/hocs/WithSpinner/WithSpinner.component';
import { createStructuredSelector } from 'reselect';
import { selectShopDataCollections, selectShopDataCollectionsLoaded } from '../../redux/shop/shop-selectors';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {

  state = {
    isLoading: true
  };

  unsubscribeFromSnapshotFunction = null;

  componentDidMount() {
    const { fetchCollectionsAsync } = this.props;
    fetchCollectionsAsync();
  }

  componentWillUnmount() {
    if (this.unsubscribeFromSnapshotFunction) {
      this.unsubscribeFromSnapshotFunction();
      this.unsubscribeFromSnapshotFunction = null;
    }
  }

  render() {
    const { match, collectionsLoaded } = this.props;
    const isLoading = !collectionsLoaded;
    return (
      <div className='shop-page'>
        <Route exact path={ `${ match.path }` }
               render={ (props) => <CollectionsOverviewWithSpinner isLoading={ isLoading } { ...props } /> } />
        <Route path={ `${ match.path }/:collectionId` }
               render={ (props) => <CollectionPageWithSpinner isLoading={ isLoading } { ...props } /> } />
      </div>
    );
  }
}

ShopPage.propTypes = { match: PropTypes.any };

const mapStateToProps = createStructuredSelector({
  collections: selectShopDataCollections,
  collectionsLoaded: selectShopDataCollectionsLoaded
});

const mapDispatchToProps = dispatch => ({
  fetchCollectionsAsync: () => dispatch(crateFetchCollectionsStartedAsyncAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
