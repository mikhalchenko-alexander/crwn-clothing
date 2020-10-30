import React from 'react';
import CollectionsOverview from '../../components/CollectionOverview/CollectionsOverview.component';
import { Route } from 'react-router-dom';
import CollectionPage from '../CollectionPage/CollectionPage.component';
import * as PropTypes from 'prop-types';
import { convertCollectionsSnapshotToMap, firestore } from '../../firebase/firebase-utils';
import { connect } from 'react-redux';
import { createUpdateCollectionsAction } from '../../redux/shop/shop-actions';

class ShopPage extends React.Component {
  unsubscribeFromSnapshotFunction = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    let collectionReference = firestore.collection('collections');
    this.unsubscribeFromSnapshotFunction = collectionReference.onSnapshot(async snapshot => {
      let collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
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
    return (
      <div className='shop-page'>
        <Route exact path={ `${ match.path }` } component={ CollectionsOverview } />
        <Route path={ `${ match.path }/:collectionId` } component={ CollectionPage } />
      </div>
    );
  }
}

ShopPage.propTypes = { match: PropTypes.any };

const mapDispatchToProps = dispatch => ({
  updateCollections: collections => dispatch(createUpdateCollectionsAction(collections))
});

export default connect(null, mapDispatchToProps)(ShopPage);
