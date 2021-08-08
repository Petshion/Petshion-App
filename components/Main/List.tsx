import React, {useState} from 'react';
import {Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components/native';
import Icon from '../../components/Icon';

interface Item {
  id?: string;
  image: string;
}

interface RootStackParamList {
  navigate: any;
  name: string[];
  params: string;
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

const IconWrap = styled.View`
  width: 30px;
  height: 30px;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 20px;
  position: absolute;
  bottom: 10px;
  right: 10px;
`;

const IconButton = styled.TouchableOpacity``;

const List = ({id, image}: Item) => {
  const [select, setSelect] = useState(false);
  const navigation = useNavigation<RootStackParamList>();

  const goToDetail = () => {
    navigation.navigate('Detail', {id});
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
      <IconWrap>
        <IconButton onPress={() => setSelect(!select)}>
          <Icon name="pets" color={select ? '#ffd426' : '#4e4e4e'} size={26} />
        </IconButton>
      </IconWrap>
    </ListWrap>
  );
};

export default List;
