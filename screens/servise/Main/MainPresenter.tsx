import React from 'react';
import styled from 'styled-components/native';
import SideMenu from 'react-native-side-menu-updated';

import {Item} from '../../../testItem/dummy';
import List from '../../../components/Main/List';
import SideItem from '../../../components/Main/SideItem';

export interface TestItem {
  _id: string;
  title: string;
  images: string[];
  price: number;
}

interface ListProps {
  items: TestItem[];
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
  const menu = <SideItem />;
  return (
    <SideMenu menu={menu} menuPosition={'right'}>
      <MainWrap contentInsetAdjustmentBehavior={'never'}>
        <RowWrap>
          <RowView>
            {items.map((item: TestItem, index) => (
              <List key={index} id={item._id} image={item.images[0]} />
            ))}
          </RowView>
        </RowWrap>
      </MainWrap>
    </SideMenu>
  );
};
