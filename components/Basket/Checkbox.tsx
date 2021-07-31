import React, {useState} from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

import Icon from '../Icon';

export default () => {
  const [checkboxState, setCheckboxState] = useState(false);
  return (
    <BouncyCheckbox
      size={25}
      disableText
      fillColor="#efde5a"
      unfillColor="#FFFFFF"
      iconComponent={
        <Icon
          name="check"
          color={checkboxState ? '#a1a1a1' : '#fff'}
          size={16}
        />
      }
      iconStyle={{
        borderColor: '#000',
        borderRadius: 4,
        borderWidth: 0.2,
      }}
      onPress={() => setCheckboxState(!checkboxState)}
    />
  );
};
