import React, {useState} from 'react';
import {TouchableOpacity, Alert} from 'react-native';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../../assets/types';

import Icon from '../../../components/Icon';
import Login from '../../../components/User/Login';
import UserInfo from '../../../components/User/UserInfo';

const UserWrap = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

const View = styled.View`
  height: 40px;
  align-items: center;
  flex-direction: row;
`;

const IconWrap = styled.View`
  width: 20px;
  margin: 0 20px;
  align-items: center;
  justify-content: center;
`;

const ListText = styled.Text`
  font-family: NanumSquareBold;
  font-size: 18px;
  color: #4e4e4e;
`;

export default () => {
  const navigation = useNavigation<RootStackParamList>();
  const [isLogin, setIsLogin] = useState(true);

  const serviceButtonAlert = () =>
    Alert.alert('팻션', '문의는 petshion.mail@gmail.com 로 보내주세요!', [
      {text: '확인', onPress: () => console.log('문의')},
    ]);

  const goToHowToUse = () => {
    navigation.navigate('HowToUse');
  };

  return (
    <UserWrap>
      {isLogin ? <UserInfo /> : <Login />}
      {isLogin ? (
        <TouchableOpacity>
          <View>
            <IconWrap>
              <Icon name="logout" color="#4e4e4e" size={20} />
            </IconWrap>
            <ListText>로그아웃</ListText>
          </View>
        </TouchableOpacity>
      ) : (
        <></>
      )}
      <TouchableOpacity onPress={serviceButtonAlert}>
        <View>
          <IconWrap>
            <Icon name="support-agent" color="#4e4e4e" size={20} />
          </IconWrap>
          <ListText>고객센터</ListText>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('TermsOfService')}>
        <View>
          <IconWrap>
            <Icon name="description" color="#4e4e4e" size={20} />
          </IconWrap>
          <ListText>서비스 이용약관</ListText>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={goToHowToUse}>
        <View>
          <IconWrap>
            <Icon name="help-outline" color="#4e4e4e" size={20} />
          </IconWrap>
          <ListText>사용방법</ListText>
        </View>
      </TouchableOpacity>
    </UserWrap>
  );
};
