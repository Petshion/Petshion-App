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
  background-color: #4e4e4e;
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
      <Icon custom name={name} color={'#A6A6A6'} size={50} />
    </SizeCheck>
  );
};
