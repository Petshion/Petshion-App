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
  width: ${WIDTH / 2.3}px;
  height: ${WIDTH / 1.5}px;
  overflow: hidden;
  margin-bottom: 20px;
  border-radius: 20px;
  background-color: #c4c4c4;
`;

const ImageWrap = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
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
    </ListWrap>
  );
};

export default List;
