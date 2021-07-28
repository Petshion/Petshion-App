import React from 'react';
import {Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components/native';

import PriceTag from '../PriceTag';

interface Item {
  image: string;
  price: number;
}

const {width: WIDTH, height: HEIGHT} = Dimensions.get('window');

const ListWrap = styled.TouchableOpacity`
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
  width: 150px;
  height: 150px;
  overflow: visible;
`;

const ListPriceTag = styled(PriceTag)`
  position: absolute;
  bottom: -${WIDTH / 4 / 2}px;
`;

const List = ({image, price}: Item) => {
  const navigation = useNavigation();
  const goToDetail = () => {
    navigation.navigate('Detail');
  };
  return (
    <ListWrap onPress={goToDetail}>
      <ImageWrap>
        <Image
          source={{
            uri: image,
          }}
        />
      </ImageWrap>
      <ListPriceTag price={price} />
    </ListWrap>
  );
};

export default List;
