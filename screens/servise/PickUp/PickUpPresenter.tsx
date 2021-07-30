import React from 'react';
import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

import {Item} from '../../../testItem/dummy';
import List from '../../../components/Main/List';

interface ListProps {
  items: Item[];
}

const {width: WIDTH, height: HEIGHT} = Dimensions.get('window');

const ScrollView = styled.ScrollView`
  padding-top: ${HEIGHT / 15}px;
  background-color: #fff;
`;

const SafeAreaView = styled.SafeAreaView``;

const RowView = styled.View`
  width: 100%;
  padding: 0 20px;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export default ({items}: ListProps) => {
  return (
    <ScrollView>
      <SafeAreaView>
        <RowView>
          {items.map((item: Item, index) => (
            <List key={index} image={item.image} />
          ))}
        </RowView>
      </SafeAreaView>
    </ScrollView>
  );
};
