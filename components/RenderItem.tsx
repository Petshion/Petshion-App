import React from 'react';
import styled from 'styled-components/native';

interface Item {
  image: string;
}

const View = styled.View`
  width: 100%;
  height: 100%;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
`;

export default ({image}: Item) => {
  return (
    <View>
      <Image source={{uri: image}} resizeMode="cover" />
    </View>
  );
};
