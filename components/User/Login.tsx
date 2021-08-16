import React from 'react';
import styled from 'styled-components/native';

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
  return (
    <LoginWrap>
      <LoginButton>
        <ButtonImage source={require('../../assets/g-logo.png')} />
        <ButtonText>구글로 로그인</ButtonText>
      </LoginButton>
    </LoginWrap>
  );
}

export default Login;
