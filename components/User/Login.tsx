import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';

const LoginWrap = styled.View`
  width: 100%;
  height: 100px;
  margin-bottom: 20px;
  align-items: center;
  justify-content: center;
`;

function Login() {
  return (
    <LoginWrap>
      <Text>로그인</Text>
    </LoginWrap>
  );
}

export default Login;
