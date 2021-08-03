import React from 'react';
import {Dimensions} from 'react-native';
import styled from 'styled-components/native';
import SideCheckbox from './SideCheckbox';

const {width: WIDTH, height: HEIGHT} = Dimensions.get('window');

const ItemWrap = styled.View`
  padding: ${HEIGHT / 10}px 20px 20px 20px;
`;

const ColorCheckbox = styled.View`
  justify-content: space-between;
  flex-direction: row;
`;

export default () => {
  return (
    <ItemWrap>
      <ColorCheckbox>
        <SideCheckbox color="#d9362a" />
        <SideCheckbox color="#efd550" />
        <SideCheckbox color="#b1db46" />
        <SideCheckbox color="#3131f4" />
        <SideCheckbox color="#c6c6c6" />
        <SideCheckbox color="#e6cda7" />
        <SideCheckbox color="#ffffff" />
        <SideCheckbox color="#000000" />
      </ColorCheckbox>
    </ItemWrap>
  );
};
