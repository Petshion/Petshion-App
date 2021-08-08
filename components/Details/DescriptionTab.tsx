import React from 'react';
import styled from 'styled-components/native';

interface Content {
  content: string;
}

const View = styled.View`
  flex: 1;
  background-color: #fff;
`;

const Text = styled.Text``;

export default ({content}: Content) => {
  return (
    <View>
      <Text>{content}</Text>
    </View>
  );
};
