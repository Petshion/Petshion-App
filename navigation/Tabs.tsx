import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import MainDrawer from './MainDrawer';
import BasketScreen from '../screens/servise/Basket';
import PickUpScreen from '../screens/servise/PickUp';
import UserScreen from '../screens/servise/User';
import Icon from '../components/Icon';

const Tabs = createBottomTabNavigator();

export default ({navigation, route}: any) => {
  return (
    <Tabs.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let iconName = '';
          if (route.name === 'Main') {
            iconName += 'home';
          } else if (route.name === 'Basket') {
            iconName += 'shopping-bag';
          } else if (route.name === 'PickUp') {
            iconName += 'pets';
          } else if (route.name === 'User') {
            iconName += 'person';
          }
          return (
            <Icon
              name={iconName}
              color={focused ? '#ffd426' : '#4e4e4e'}
              size={30}
            />
          );
        },
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          borderTopColor: '#4e4e4e',
        },
      })}
      initialRouteName={'Main'}>
      <Tabs.Screen name="Main" component={MainDrawer} />
      <Tabs.Screen name="Basket" component={BasketScreen} />
      <Tabs.Screen name="PickUp" component={PickUpScreen} />
      <Tabs.Screen name="User" component={UserScreen} />
    </Tabs.Navigator>
  );
};
