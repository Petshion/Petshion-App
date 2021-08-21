import React from 'react';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';

import Icon from './Icon';

interface ButtonState {
  name: string;
  closeFn?: () => any;
}

const CloseButton = styled.TouchableOpacity`
  margin: 6px 14px;
`;

export default ({name}: ButtonState) => {
  const navigation = useNavigation();
  return (
    <CloseButton onPress={() => navigation.goBack()}>
      <Icon name={name} size={24} />
    </CloseButton>
  );
};
