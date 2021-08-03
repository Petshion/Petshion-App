import React from 'react';
import {Dimensions} from 'react-native';
import styled from 'styled-components/native';
import SideMenu from 'react-native-side-menu-updated';

import {Item} from '../../../testItem/dummy';
import List from '../../../components/Main/List';
import SideItem from '../../../components/Main/SideItem';

interface ListProps {
  items: Item[];
}

const {width: WIDTH, height: HEIGHT} = Dimensions.get('window');

const MainWrap = styled.ScrollView`
  flex: 1;
  background-color: #fff;
`;

const RowWrap = styled.View`
  padding-top: ${HEIGHT / 15}px;
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
            {items.map((item: Item, index) => (
              <List key={index} id={item.product_id} image={item.image} />
            ))}
          </RowView>
        </RowWrap>
      </MainWrap>
    </SideMenu>
  );
};
