import React from 'react';
import {View} from 'react-native';

import Icon from '../components/Icon';

export default ({name, children}: any) => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Icon name={name} color={'#4e4e4e'} size={64} />
      {children}
    </View>
  );
};
