import React from 'react';
import styled from 'styled-components/native';

import {Item} from '../../../testItem/dummy';
import List from '../../../components/Main/List';

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

export default ({items}: ListProps) => {
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
};
