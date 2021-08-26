import React from 'react';
import styled from 'styled-components/native';

import ScrollContainer from '../../../components/ScrollContainer';
import List from '../../../components/Main/List';
import {ListItem} from '../../../assets/types';
import VoidView from '../../../components/VoidView';

interface ListProps {
  loading: boolean;
  refreshFn: () => any;
  getListItems: ListItem[];
}
const RowWrap = styled.View`
  width: 100%;
  padding: 20px 20px 0 20px;
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

export default ({refreshFn, loading, getListItems}: ListProps) => {
  return (
    <ScrollContainer
      refreshFn={refreshFn}
      loading={loading}
      contentContainerStyle={
        getListItems.length ? {} : {flexGrow: 1, justifyContent: 'center'}
      }>
      <RowWrap>
        {getListItems.length ? (
          getListItems.map((item, index) => (
            <List key={index} _id={item._id} images={item.images} />
          ))
        ) : (
          <VoidView name={'search-off'}>
            <VoidText>
              <VoidTextColor>검색 결과</VoidTextColor>가 없는 모양이에요. 😱
            </VoidText>
          </VoidView>
        )}
      </RowWrap>
    </ScrollContainer>
  );
};
