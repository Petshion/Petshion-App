import React from 'react';
import styled from 'styled-components/native';

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

const SizeCheckText = styled.Text`
  font-family: NanumSquare;
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
      <SizeCheckText>{name}</SizeCheckText>
    </SizeCheck>
  );
};
