import React from 'react';
import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

import Price from './Price';
import Icon from './Icon';

const {width: WIDTH, height: HEIGHT} = Dimensions.get('window');

const PriceWrap = styled.View`
  width: ${WIDTH / 1.1}px;
  height: ${WIDTH / 4}px;
  margin: 0 auto;
  padding: 28px 22px 31px 22px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  border-radius: 20px;
  box-shadow: 0 14px 20px rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
`;

const IconWrap = styled.View`
  width: 60px;
  flex-direction: row;
  justify-content: space-between;
`;

const Button = styled.TouchableOpacity``;

export default ({price}: any) => {
  return (
    <PriceWrap>
      <Price price={price} size={20} />
      <IconWrap>
        <Button>
          <Icon name={'share'} size={20} />
        </Button>
        <Button>
          <Icon name={'foot'} size={20} />
        </Button>
      </IconWrap>
    </PriceWrap>
  );
};
