import React from 'react';
import styled from 'styled-components/native';

import List from '../../components/Main/List';

const ScrollView = styled.ScrollView`
  background-color: #fff;
`;

const styles = {
  paddingHorizontal: 20,
};

function MainScreen() {
  return (
    <ScrollView>
      <List />
      <List />
      <List />
    </ScrollView>
  );
}

export default MainScreen;
