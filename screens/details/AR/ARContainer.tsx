import React from 'react';
import ARPresenter from './ARPresenter';

export default ({
  route: {
    params: {AR_image},
  },
}: any) => {
  return <ARPresenter AR_image={AR_image} />;
};
