import React from 'react';
import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

import Icon from '../Icon';

const {width: WIDTH, height: HEIGHT} = Dimensions.get('window');

const ListWrap = styled.View`
  width: ${WIDTH / 1.1}px;
  height: ${WIDTH / 1.1}px;
  margin: 20px auto ${WIDTH / 4 / 2}px auto;
  border-radius: 20px;
  box-shadow: 0 14px 20px rgba(0, 0, 0, 0.16);
  background-color: #f7f7f7;
`;

const ImageWrap = styled.View`
  width: 100%;
  height: ${WIDTH / 1.1 - WIDTH / 4 / 2}px;
  align-items: center;
  justify-content: center;
`;

const Image = styled.Image`
  width: 100px;
  height: 100px;
`;

const PriceWrap = styled.View`
  width: ${WIDTH / 1.1}px;
  height: ${WIDTH / 4}px;
  position: absolute;
  margin: 0 auto;
  padding: 28px 22px 31px 22px;
  align-items: center;
  justify-content: space-between;
  bottom: -${WIDTH / 4 / 2}px;
  flex-direction: row;
  border-radius: 20px;
  box-shadow: 0 14px 20px rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
`;

const Price = styled.Text`
  font-family: NanumSquare;
  font-size: 20px;
  font-weight: bold;
  font-style: normal;
  line-height: 0;
  letter-spacing: 0;
  text-align: left;
  color: #000000;
`;

const IconWrap = styled.View`
  width: 60px;
  flex-direction: row;
  justify-content: space-between;
`;

const Button = styled.TouchableOpacity``;

const List = ({image, price}: any) => {
  return (
    <ListWrap>
      <ImageWrap>
        <Image
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
      </ImageWrap>
      <PriceWrap>
        <Price>₩ {'1,000,000'}</Price>
        <IconWrap>
          <Button>
            <Icon name={'share'} size={20} />
          </Button>
          <Button>
            <Icon name={'foot'} size={20} />
          </Button>
        </IconWrap>
      </PriceWrap>
    </ListWrap>
  );
};

export default List;
