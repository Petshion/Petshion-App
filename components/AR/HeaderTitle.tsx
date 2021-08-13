import React from 'react';
import styled from 'styled-components/native';

const HeaderTitleWrap = styled.View`
  margin-right: 20px;
  flex-direction: row;
  justify-content: space-around;
`;

const Pet = styled.Text`
  font-family: NanumSquareRegular;
  font-size: 27px;
  color: #efde5a;
`;

const Shion = styled.Text`
  font-family: NanumSquareRegular;
  font-size: 27px;
  color: #606161;
`;

const HeaderTitle = () => (
  <HeaderTitleWrap>
    <Pet>PET</Pet>
    <Shion>SHION</Shion>
  </HeaderTitleWrap>
);

export default HeaderTitle;
