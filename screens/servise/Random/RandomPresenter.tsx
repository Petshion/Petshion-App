import React from 'react';
import styled from 'styled-components/native';

import SnapCarousel from '../../../components/Random/SnapCarousel';

const View = styled.View`
  flex: 1;
  background-color: #fff;
`;

export default ({randomItems}: any) => {
  return (
    <View>
      <SnapCarousel randomItems={randomItems} />
    </View>
  );
};
