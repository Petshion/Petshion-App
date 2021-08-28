import React, {useEffect} from 'react';
import {Linking, Platform} from 'react-native';
import styled from 'styled-components/native';
import {useDispatch} from 'react-redux';
import {insert} from '../../modules/auth';

import {serverURL} from '../../api';

const LoginWrap = styled.View`
  width: 100%;
  height: 150px;
  align-items: center;
  justify-content: center;
`;

const LoginButton = styled.TouchableOpacity`
  width: 200px;
  padding: 10px 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  border: solid 0.3px #000;
`;

const ButtonImage = styled.Image`
  width: 25px;
  height: 25px;
`;

const ButtonText = styled.Text`
  font-family: NanumSquareRegular;
  font-size: 18px;
`;

function Login() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Add event listener to handle OAuthLogin:// URLs
    Linking.addEventListener('url', handleOpenURL);
    // Launched from an external URL
    Linking.getInitialURL().then(url => {
      if (url) {
        handleOpenURL({url});
      }
    });

    return () => Linking.removeEventListener('url', handleOpenURL);
  });

  const handleOpenURL = ({url}) => {
    // Extract stringified user string out of the URL
    const [, user_string] = url.match(/user=([^#]+)/);
    dispatch(insert(JSON.parse(decodeURI(user_string))));
  };

  const openURL = () => {
    // Use SafariView on iOS
    /* if (Platform.OS === 'ios') {
      SafariView.show({
        url: url,
        fromBottom: true,
      });
    } */
    // Or Linking.openURL on Android
    Linking.openURL(`${serverURL}/auth/google`);
  };

  return (
    <LoginWrap>
      <LoginButton onPress={openURL}>
        <ButtonImage source={require('../../assets/g-logo.png')} />
        <ButtonText>구글로 로그인</ButtonText>
      </LoginButton>
    </LoginWrap>
  );
}

export default Login;
