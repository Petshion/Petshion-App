import React from 'react';
import styled from 'styled-components/native';
import {Text} from '../../../components/Text';

const VRWrap = styled.View`
  flex: 1;
  align-items: center;
  background-color: green;
`;

const CaptureButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 60px;
`;

const CaptureButtonView = styled.View`
  width: 62.1px;
  height: 62.1px;
  border: 5px solid #f4d540;
  border-radius: 50px;
`;

export default () => {
  return (
    <VRWrap>
      <Text>2334</Text>
      <CaptureButton>
        <CaptureButtonView />
      </CaptureButton>
    </VRWrap>
  );
};
