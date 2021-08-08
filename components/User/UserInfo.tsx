import React from 'react';
import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

const {width: WIDTH, height: HEIGHT} = Dimensions.get('window');

const UserInfoWrap = styled.View`
  width: 100%;
  height: ${HEIGHT / 3}px;
  margin: 20px 0;
  align-items: center;
  justify-content: space-between;
`;

const Profile = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 100px;
`;

const UserName = styled.Text`
  font-family: NanumSquare;
  font-size: 18px;
  font-weight: bold;
  color: #4e4e4e;
`;

const ShipWrap = styled.View`
  width: ${WIDTH - 40}px;
  height: 100px;
  flex-direction: row;
`;

const ShipLeft = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-around;
  border: solid 0.5px #4e4e4e;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
`;

const ShipCenter = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-around;
  border: solid 0.5px #4e4e4e;
`;

const ShipRight = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-around;
  border: solid 0.5px #4e4e4e;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
`;

const ShipTitle = styled.Text`
  font-family: NanumSquare;
  font-size: 14px;
  font-weight: bold;
  color: #4e4e4e;
`;

const ShipText = styled.Text`
  font-family: NanumSquare;
  font-size: 18px;
  font-weight: bold;
  color: #4e4e4e;
`;

function UserInfo() {
  return (
    <UserInfoWrap>
      <Profile
        source={{
          uri: 'https://source.unsplash.com/random/400x400',
        }}
      />
      <UserName>컨슈머PET</UserName>
      <ShipWrap>
        <ShipLeft>
          <ShipTitle>배송중</ShipTitle>
          <ShipText>0</ShipText>
        </ShipLeft>
        <ShipCenter>
          <ShipTitle>배송완료</ShipTitle>
          <ShipText>0</ShipText>
        </ShipCenter>
        <ShipRight>
          <ShipTitle>교환/환불</ShipTitle>
          <ShipText>0</ShipText>
        </ShipRight>
      </ShipWrap>
    </UserInfoWrap>
  );
}

export default UserInfo;
