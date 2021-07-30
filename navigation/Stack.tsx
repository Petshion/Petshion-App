import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Tabs from './Tabs';
import ProductScreen from '../screens/details/Product';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        shadowColor: '#cac9ca',
      },

      headerBackTitleVisible: false,
    }}>
    <Stack.Screen
      name="Tabs"
      component={Tabs}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Detail"
      component={ProductScreen}
      options={{
        headerTitle: '',
        headerShown: true,
        headerTransparent: true,
        headerTintColor: '#fff',
      }}
    />
  </Stack.Navigator>
);
