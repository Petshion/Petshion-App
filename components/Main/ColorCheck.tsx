import React, {useState} from 'react';
import styled from 'styled-components/native';
import {useDispatch} from 'react-redux';
import {addColor, removeColor} from '../../modules/filter';

import Icon from '../Icon';

interface CheckboxType {
  name: string;
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

const SideCheckbox = ({name, color}: CheckboxType) => {
  const [checkboxState, setCheckboxState] = useState(false);

  const dispatch = useDispatch();

  const ToggleState = async () => {
    if (checkboxState) {
      setCheckboxState(!checkboxState);
      dispatch(removeColor(name));
    } else {
      setCheckboxState(!checkboxState);
      dispatch(addColor(name));
    }
  };

  return (
    <IconButton onPress={ToggleState} style={{backgroundColor: color}}>
      <Icon
        name={'check'}
        color={checkboxState ? '#a1a1a1' : color}
        size={16}
      />
    </IconButton>
  );
};

export default SideCheckbox;
