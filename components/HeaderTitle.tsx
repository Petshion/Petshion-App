import React from 'react';
import styled from 'styled-components/native';

const HeaderTitleWrap = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: space-around;
`;

const Pet = styled.Text`
  width: 50px;
  height: 31px;
  font-family: NanumSquare;
  font-size: 27px;
  font-weight: 800;
  font-style: normal;
  line-height: 0;
  letter-spacing: 0;
  color: #efde5a;
`;

const Shion = styled.Text`
  width: 83px;
  height: 31px;
  font-family: NanumSquare;
  font-size: 27px;
  font-weight: 800;
  font-style: normal;
  line-height: 0;
  letter-spacing: 0;
  color: #606161;
`;

const HeaderTitle = () => (
  <HeaderTitleWrap>
    <Pet>PET</Pet>
    <Shion>SHION</Shion>
  </HeaderTitleWrap>
);

export default HeaderTitle;
