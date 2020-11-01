import React from 'react';
import CollectionsOverview from '../../components/CollectionOverview/CollectionsOverview.component';
import { Route } from 'react-router-dom';
import CollectionPage from '../CollectionPage/CollectionPage.component';
import * as PropTypes from 'prop-types';
import { convertCollectionsSnapshotToMap, firestore } from '../../firebase/firebase-utils';
import { connect } from 'react-redux';
import { createUpdateCollectionsAction } from '../../redux/shop/shop-actions';
import { WithSpinner } from '../../components/hocs/WithSpinner/WithSpinner.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {

  state = {
    isLoading: true
  };

  unsubscribeFromSnapshotFunction = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    let collectionReference = firestore.collection('collections');
    this.unsubscribeFromSnapshotFunction = collectionReference.onSnapshot(async snapshot => {
      let collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({ isLoading: false });
    });
  }

  componentWillUnmount() {
    if (this.unsubscribeFromSnapshotFunction) {
      this.unsubscribeFromSnapshotFunction();
      this.unsubscribeFromSnapshotFunction = null;
    }
  }

  render() {
    let { match } = this.props;
    const { isLoading } = this.state;
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

const mapDispatchToProps = dispatch => ({
  updateCollections: collections => dispatch(createUpdateCollectionsAction(collections))
});

export default connect(null, mapDispatchToProps)(ShopPage);
