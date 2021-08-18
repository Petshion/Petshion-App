import React from 'react';
import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

import AnimalCheck from './AnimalCheck';
import ColorCheck from './ColorCheck';
import SizeCheck from './SizeCheck';

const {width: WIDTH, height: HEIGHT} = Dimensions.get('window');

const ItemWrap = styled.ScrollView`
  padding: ${HEIGHT / 15}px 20px 20px 20px;
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
        <ColorCheck name={'빨강'} color="#d9362a" />
        <ColorCheck name={'노랑'} color="#efd550" />
        <ColorCheck name={'초록'} color="#b1db46" />
        <ColorCheck name={'파랑'} color="#3131f4" />
        <ColorCheck name={'은'} color="#c6c6c6" />
        <ColorCheck name={'금'} color="#e6cda7" />
        <ColorCheck name={'흰'} color="#ffffff" />
        <ColorCheck name={'검'} color="#000000" />
      </ColorCheckbox>
      <SizeCheckWrap>
        <SizeCheck name={'S'} left />
        <SizeCheck name={'M'} />
        <SizeCheck name={'L'} />
        <SizeCheck name={'XL'} />
        <SizeCheck name={'2XL'} right />
      </SizeCheckWrap>
      <AnimalCheckWrap>
        <AnimalCheck name={'cat'} left />
        <AnimalCheck name={'dog'} right />
      </AnimalCheckWrap>
    </ItemWrap>
  );
};
