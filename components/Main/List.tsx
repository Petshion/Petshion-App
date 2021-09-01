import React, {useState, useEffect} from 'react';
import {Alert, Dimensions, Vibration} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components/native';
import Icon from '../../components/Icon';
import {ListItem, RootStackParamList} from '../../assets/types';
import {useSelector} from 'react-redux';
import {authSelector} from '../../modules/hooks';
import {basketApi} from '../../api';

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

const List = React.memo(({_id, images, checked}: ListItem) => {
  const {AUTHItem} = useSelector(authSelector);
  const [select, setSelect] = useState(false);
  const navigation = useNavigation<RootStackParamList>();

  const pleaseLogin = () => {
    Alert.alert('팻션', '로그인이 필요한 서비스입니다.', [
      {text: '확인', onPress: () => navigation.navigate('User')},
    ]);
  };

  const goToDetail = () => {
    navigation.navigate('Detail', {_id});
  };

  const toggleSwitch = () => {
    Vibration.vibrate(5);
    if (!AUTHItem) {
      pleaseLogin();
      return;
    }
    if (select) {
      basketApi.addBasket(_id, AUTHItem?.access_token);
      setSelect(false);
    } else {
      basketApi.removeBasket(_id, AUTHItem?.access_token);
      setSelect(true);
    }
  };

  useEffect(() => {
    setSelect(checked);
  }, [checked]);

  return (
    <ListWrap onPress={goToDetail}>
      <ImageWrap>
        <Image
          source={{
            uri: images,
          }}
        />
      </ImageWrap>
      <IconButton onPress={toggleSwitch} activeOpacity={0.8}>
        <IconWrap>
          <Icon name="pets" color={select ? '#ffd426' : '#4e4e4e'} size={26} />
        </IconWrap>
      </IconButton>
    </ListWrap>
  );
});

export default List;
