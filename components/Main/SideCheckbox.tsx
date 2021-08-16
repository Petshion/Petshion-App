import React, {useState} from 'react';
import styled from 'styled-components/native';
import Checkbox from '../Basket/Checkbox';

import Icon from '../../components/Icon';

interface CheckboxType {
  color: string;
}

const IconButton = styled.TouchableOpacity`
  width: 25px;
  height: 25px;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  border: solid 0.2px #000;
`;

const SideCheckbox = ({color}: CheckboxType) => {
  const [checkboxState, setCheckboxState] = useState(false);

  return (
    <IconButton
      onPress={() => setCheckboxState(!checkboxState)}
      style={{backgroundColor: color}}>
      <Icon
        name={'check'}
        color={checkboxState ? '#a1a1a1' : color}
        size={16}
      />
    </IconButton>
  );
};

export default SideCheckbox;
