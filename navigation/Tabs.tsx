import React, {useLayoutEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import SearchScreen from '../screens/servise/Search';
import RandomScreen from '../screens/servise/Random';
import MainScreen from '../screens/servise/Main';
import UserScreen from '../screens/servise/User';
import BasketScreen from '../screens/servise/Basket';
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
            iconName += 'main';
          } else if (route.name === 'Search') {
            iconName += 'search';
          } else if (route.name === 'Random') {
            iconName += 'random';
          } else if (route.name === 'Basket') {
            iconName += 'basket';
          } else if (route.name === 'User') {
            iconName += 'user';
          }
          return (
            <Icon
              name={iconName}
              color={focused ? '#f4d53f' : '#cac9ca'}
              size={26}
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
      <Tabs.Screen name="Search" component={SearchScreen} />
      <Tabs.Screen name="Random" component={RandomScreen} />
      <Tabs.Screen name="Main" component={MainScreen} />
      <Tabs.Screen name="User" component={UserScreen} />
      <Tabs.Screen name="Basket" component={BasketScreen} />
    </Tabs.Navigator>
  );
};
