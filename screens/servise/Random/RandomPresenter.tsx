import React from 'react';
import styled from 'styled-components/native';

import {Item} from '../../../testItem/dummy';
import SnapCarousel from '../../../components/Random/SnapCarousel';

interface ListProps {
  items: Item[];
}

const View = styled.View`
  flex: 1;
  background-color: #fff;
`;

export default ({items}: ListProps) => {
  return (
    <View>
      <SnapCarousel items={items} />
    </View>
  );
};
