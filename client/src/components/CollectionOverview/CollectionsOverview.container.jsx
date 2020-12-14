import { compose } from 'redux';
import CollectionsOverview from './CollectionsOverview.component';
import { WithSpinner } from '../hocs/WithSpinner/WithSpinner.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectShopDataCollectionsFetching } from '../../redux/shop/shop-selectors';

const mapStateToProps = createStructuredSelector({
  isLoading: selectShopDataCollectionsFetching
});

const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);

export default CollectionOverviewContainer;
