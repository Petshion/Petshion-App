import React from 'react';
import styled from 'styled-components/native';

import {Item} from '../../../testItem/dummy';
import List from '../../../components/Main/List';
import VoidView from '../../../components/VoidView';

interface ListProps {
  items: Item[];
}

const MainWrap = styled.ScrollView`
  flex: 1;
  background-color: #fff;
`;

const RowWrap = styled.View`
  padding-top: 20px;
`;

const RowView = styled.View`
  width: 100%;
  padding: 0 20px;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const VoidText = styled.Text`
  margin-top: 20px;
  font-family: NanumSquareRegular;
  font-size: 18px;
  color: #4e4e4e;
`;

const VoidTextColor = styled.Text`
  font-family: NanumSquareRegular;
  font-size: 18px;
  color: #ffd426;
`;

export default ({items}: ListProps) => {
  if (items.length) {
    return (
      <MainWrap contentInsetAdjustmentBehavior={'never'}>
        <RowWrap>
          <RowView>
            {items.map((item: Item, index) => (
              <List key={index} _id={item._id} images={item.image} />
            ))}
          </RowView>
        </RowWrap>
      </MainWrap>
    );
  } else {
    return (
      <VoidView name={'pets'}>
        <VoidText>
          관심 있는 옷을 <VoidTextColor>발 도장</VoidTextColor> 찍어보세요!
        </VoidText>
      </VoidView>
    );
  }
};
