import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import CollectionOverviewContainer from '../../components/CollectionOverview/CollectionsOverview.container';
import CollectionPageContainer from '../CollectionPage/CollectionPage.container';
import { createFetchCollectionsStartedAction } from '../../redux/shop/shop-actions';

const ShopPage = ({ match }) => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(createFetchCollectionsStartedAction());
  }, [dispatch]);

  return (
    <div className="shop-page">
      <Route exact path={ `${ match.path }` }
             component={ CollectionOverviewContainer } />
      <Route path={ `${ match.path }/:collectionId` }
             component={ CollectionPageContainer } />
    </div>
  );
};

export default ShopPage;
