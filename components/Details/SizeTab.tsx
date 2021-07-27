import React from 'react';
import styled from 'styled-components/native';

import SizeTable from './SizeTable';

const View = styled.View`
  flex: 1;
  background-color: #fff;
`;

const Text = styled.Text``;

export default () => {
  return (
    <View>
      <SizeTable />
    </View>
  );
};
