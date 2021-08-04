import React from 'react';
import {Dimensions} from 'react-native';
import styled from 'styled-components/native';
import AnimalCheck from './AnimalCheck';

import SideCheckbox from './SideCheckbox';
import SizeCheck from './SizeCheck';

const {width: WIDTH, height: HEIGHT} = Dimensions.get('window');

const ItemWrap = styled.ScrollView`
  padding: ${HEIGHT / 10}px 20px 20px 20px;
`;

const ColorCheckbox = styled.View`
  justify-content: space-between;
  flex-direction: row;
`;

const SizeCheckWrap = styled.View`
  width: 100%;
  height: 50px;
  margin-top: 60px;
  flex-direction: row;
`;

const AnimalCheckWrap = styled.View`
  width: 100%;
  height: 100px;
  margin-top: 60px;
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
      <SizeCheckWrap>
        <SizeCheck left name={'S'} />
        <SizeCheck name={'M'} />
        <SizeCheck name={'L'} />
        <SizeCheck name={'XL'} />
        <SizeCheck right name={'2XL'} />
      </SizeCheckWrap>
      <AnimalCheckWrap>
        <AnimalCheck left name={'cat'} />
        <AnimalCheck right name={'dog'} />
      </AnimalCheckWrap>
    </ItemWrap>
  );
};
