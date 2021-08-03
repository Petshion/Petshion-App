import React from 'react';
import Checkbox from '../Basket/Checkbox';

interface CheckboxType {
  color: string;
}

const SideCheckbox = ({color}: CheckboxType) => {
  return (
    <Checkbox
      name="check"
      size={25}
      iconSize={16}
      fillColor={color}
      unfillColor={color}
      borderRadius={20}
    />
  );
};

export default SideCheckbox;
