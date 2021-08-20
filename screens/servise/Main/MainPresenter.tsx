import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';

import ScrollContainer from '../../../components/ScrollContainer';
import List from '../../../components/Main/List';
import {ListItem} from '../../../assets/types';

interface ListProps {
  loading: boolean;
  refreshFn: () => any;
  getListItems: ListItem[];
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

const Loading = styled.Text``;

export default ({refreshFn, loading, getListItems}: ListProps) => {
  return (
    <ScrollContainer refreshFn={refreshFn} loading={loading}>
      <RowWrap>
        <RowView>
          {getListItems ? (
            getListItems.map((item, index) => (
              <List key={index} _id={item._id} images={item.images} />
            ))
          ) : (
            <Loading>loading...</Loading>
          )}
        </RowView>
      </RowWrap>
    </ScrollContainer>
  );
};
