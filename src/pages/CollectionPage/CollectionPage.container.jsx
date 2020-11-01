import { compose } from 'redux';
import { WithSpinner } from '../../components/hocs/WithSpinner/WithSpinner.component';
import { connect } from 'react-redux';
import CollectionPage from './CollectionPage.component';
import { createStructuredSelector } from 'reselect';
import { selectShopDataCollectionsLoaded } from '../../redux/shop/shop-selectors';

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectShopDataCollectionsLoaded(state)
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);

export default CollectionPageContainer;
