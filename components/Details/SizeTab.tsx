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

const SizeText = styled.Text`
  padding: 16px;
  background-color: #fff;
`;

export default ({sizeContent}: SizeContent) => {
  return (
    <View>
      <SizeText>cm 단위를 기준으로 작성된 사이즈표입니다😀</SizeText>
      <SizeTable sizeContent={sizeContent} />
    </View>
  );
};
