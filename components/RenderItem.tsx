import React from 'react';
import styled from 'styled-components/native';

const View = styled.View`
  width: 100%;
  height: 100%;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
`;

export default (image: any, index: any) => {
  return (
    <View key={index}>
      <Image source={{uri: image}} resizeMode="cover" />
    </View>
  );
};
