import React, {useState} from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

import Icon from '../Icon';

interface IconTypes {
  name: string;
  size: number;
  iconSize: number;
  fillColor: string;
  unfillColor: string;
  borderRadius: number;
}

export default ({
  name,
  size,
  iconSize,
  fillColor,
  unfillColor,
  borderRadius,
}: IconTypes) => {
  const [checkboxState, setCheckboxState] = useState(false);
  return (
    <BouncyCheckbox
      size={size}
      disableText
      fillColor={fillColor}
      unfillColor={unfillColor}
      iconComponent={
        <Icon
          name={name}
          color={checkboxState ? '#a1a1a1' : unfillColor}
          size={iconSize}
        />
      }
      iconStyle={{
        borderColor: '#000',
        borderRadius: borderRadius,
        borderWidth: 0.2,
      }}
      onPress={() => setCheckboxState(!checkboxState)}
    />
  );
};
