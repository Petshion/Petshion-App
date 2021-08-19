import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import styled from 'styled-components/native';
import {allSelect, allDisSelect, toggleSelect} from '../../modules/basket';

import Icon from '../Icon';

interface IconTypes {
  name: string;
  checked: boolean;
  id?: string;
  fillColor: string;
  unfillColor: string;
}

const IconButton = styled.TouchableOpacity`
  width: 20px;
  height: 20px;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  border: solid 0.2px #000;
`;

export default ({name, checked, id, fillColor, unfillColor}: IconTypes) => {
  const [check, setCheck] = useState(false);
  const dispatch = useDispatch();

  const allSelectCheckF = () => {
    if (check) {
      dispatch(allDisSelect());
      setCheck(false);
    } else {
      dispatch(allSelect());
      setCheck(true);
    }
  };

  useEffect(() => {
    setCheck(checked);
  }, [checked]);

  return (
    <IconButton
      style={{backgroundColor: check ? fillColor : unfillColor}}
      onPress={id ? () => dispatch(toggleSelect(id)) : allSelectCheckF}>
      <Icon name={'check'} color={check ? '#a1a1a1' : unfillColor} size={16} />
    </IconButton>
  );
};
