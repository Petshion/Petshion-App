import React, {useState} from 'react';
import {Vibration} from 'react-native';
import styled from 'styled-components/native';
import {useDispatch} from 'react-redux';
import {addKind, removeKind} from '../../modules/filter';

import Icon from '../Icon';

interface SizeCheck {
  left?: boolean;
  right?: boolean;
  name: string;
}

const SizeCheck = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: space-around;
  border: solid 0.5px #a1a1a1;
`;

export default ({left, right, name}: SizeCheck) => {
  const [checkState, setCheckState] = useState(false);

  const dispatch = useDispatch();

  const ToggleState = async () => {
    Vibration.vibrate(5);
    if (checkState) {
      setCheckState(!checkState);
      dispatch(removeKind(name));
    } else {
      setCheckState(!checkState);
      dispatch(addKind(name));
    }
  };

  return (
    <SizeCheck
      onPress={ToggleState}
      style={{
        marginTop: 1,
        ...(left
          ? {
              borderTopLeftRadius: 15,
              borderBottomLeftRadius: 15,
            }
          : {}),
        ...(right
          ? {borderTopRightRadius: 15, borderBottomRightRadius: 15}
          : {}),
        ...(checkState
          ? {backgroundColor: '#ffd426'}
          : {backgroundColor: '#4e4e4e'}),
      }}>
      <Icon
        custom
        name={name}
        color={checkState ? '#4e4e4e' : '#a1a1a1'}
        size={50}
      />
    </SizeCheck>
  );
};
