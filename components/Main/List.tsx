import React, {useState} from 'react';
import {Dimensions, Vibration} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components/native';
import Icon from '../../components/Icon';
import {ListItem, RootStackParamList} from '../../assets/types';

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

const IconButton = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0px;
  right: 0px;
`;

const IconWrap = styled.View`
  width: 30px;
  height: 30px;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 20px;
`;

const List = React.memo(({_id, images}: ListItem) => {
  const [select, setSelect] = useState(false);
  const navigation = useNavigation<RootStackParamList>();

  const goToDetail = () => {
    navigation.navigate('Detail', {_id});
  };

  return (
    <ListWrap onPress={goToDetail}>
      <ImageWrap>
        <Image
          source={{
            uri: images,
          }}
        />
      </ImageWrap>
      <IconButton
        onPress={() => {
          Vibration.vibrate(5);
          setSelect(!select);
        }}
        activeOpacity={0.8}>
        <IconWrap>
          <Icon name="pets" color={select ? '#ffd426' : '#4e4e4e'} size={26} />
        </IconWrap>
      </IconButton>
    </ListWrap>
  );
});

export default List;
