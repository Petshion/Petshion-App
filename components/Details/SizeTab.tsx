import React from 'react';
import styled from 'styled-components/native';

import SizeTable from './SizeTable';

interface SizeContent {
  sizeContent: string[][];
}

const View = styled.View`
  flex: 1;
  background-color: #fff;
`;

export default ({sizeContent}: SizeContent) => {
  return (
    <View>
      <SizeTable sizeContent={sizeContent} />
    </View>
  );
};
