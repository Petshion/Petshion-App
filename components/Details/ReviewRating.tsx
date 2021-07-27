import React from 'react';
import {Rating} from 'react-native-ratings';

const IMAGE = require('../../assets/dogfoot.png');

export default () => {
  return (
    <Rating
      type="custom"
      ratingImage={IMAGE}
      ratingColor="#f4d540"
      ratingCount={5}
      imageSize={20}
      fractions={2}
      startingValue={3}
      readonly
    />
  );
};
