import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

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
  const [isLogin, setIsLogin] = useState(true);
  return (
    <UserWrap>
      {isLogin ? <UserInfo /> : <Login />}
      <TouchableOpacity>
        <View>
          <IconWrap>
            <Icon name="support-agent" color="#4e4e4e" size={20} />
          </IconWrap>
          <ListText>고객센터</ListText>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View>
          <IconWrap>
            <Icon name="description" color="#4e4e4e" size={20} />
          </IconWrap>
          <ListText>서비스 이용약관</ListText>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
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
