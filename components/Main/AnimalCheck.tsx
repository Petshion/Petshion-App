import React from 'react';
import styled from 'styled-components/native';
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
  background-color: rgba(246, 235, 97, 0.2);
`;

const SizeCheckText = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #a1a1a1;
`;

export default ({left, right, name}: SizeCheck) => {
  return (
    <SizeCheck
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
      }}>
      <Icon custom name={name} color={'#000'} size={50} />
    </SizeCheck>
  );
};
