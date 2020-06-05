import React from 'react';
import CollectionsOverview from '../../components/CollectionOverview/CollectionsOverview.component';
import { Route } from 'react-router-dom';
import CollectionPage from '../CollectionPage/CollectionPage.component';

const ShopPage = ({ match }) => (
  <div className='shop-page'>
    <Route exact path={ `${ match.path }` } component={ CollectionsOverview } />
    <Route path={ `${ match.path }/:collectionId` } component={ CollectionPage } />
  </div>
);

export default ShopPage;
