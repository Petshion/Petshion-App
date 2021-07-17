import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Tabs from './Tabs';
import HeaderTitle from '../components/HeaderTitle';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        shadowColor: '#666666',
      },

      headerBackTitleVisible: false,
    }}>
    <Stack.Screen
      name="Tabs"
      component={Tabs}
      options={{
        headerTitle: props => <HeaderTitle />,
      }}
    />
    {/* <Stack.Screen name="Detail" component={Detail} /> */}
  </Stack.Navigator>
);
