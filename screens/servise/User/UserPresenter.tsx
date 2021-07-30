import React, {useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';
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

export default () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <UserWrap>
      {isLogin ? <UserInfo /> : <Login />}
      <TouchableOpacity>
        <View>
          <IconWrap>
            <Icon name="support-agent" color="#a1a1a1" size={20} />
          </IconWrap>
          <Text>고객센터</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View>
          <IconWrap>
            <Icon name="description" color="#a1a1a1" size={20} />
          </IconWrap>
          <Text>서비스 이용약관</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View>
          <IconWrap>
            <Icon name="help-outline" color="#a1a1a1" size={20} />
          </IconWrap>
          <Text>사용방법</Text>
        </View>
      </TouchableOpacity>
    </UserWrap>
  );
};
