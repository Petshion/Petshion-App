import React, {useLayoutEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import MainScreen from '../screens/servise/Main';
import BasketScreen from '../screens/servise/Basket';
import PickUpScreen from '../screens/servise/PickUp';
import UserScreen from '../screens/servise/User';
import Icon from '../components/Icon';

const Tabs = createBottomTabNavigator();

const getHeaderName = (route: any) =>
  route?.state?.routeNames[route.state.index] || 'Main';

export default ({navigation, route}: any) => {
  /* 라우트별 헤더 노출 비노출 여부
  useLayoutEffect(() => {
    const name = getHeaderName(route);
    navigation.setOptions({
      title: false,
    });
  }, [route]); */
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
              color={focused ? '#f4d53f' : '#cac9ca'}
              size={30}
            />
          );
        },
      })}
      initialRouteName={'Main'}
      tabBarOptions={{
        showLabel: false,
        style: {
          borderTopColor: '#cac9ca',
        },
      }}>
      <Tabs.Screen name="Main" component={MainScreen} />
      <Tabs.Screen name="Basket" component={BasketScreen} />
      <Tabs.Screen name="PickUp" component={PickUpScreen} />
      <Tabs.Screen name="User" component={UserScreen} />
    </Tabs.Navigator>
  );
};
