import { SpinnerContainer, SpinnerOverlay } from './WithSpinner.styles';
import React from 'react';

export const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
  return isLoading ?
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay> :
    <WrappedComponent { ...otherProps } />;
};
