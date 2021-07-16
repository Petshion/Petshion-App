import React, {useLayoutEffect} from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MainScreen from '../screens/servise/MainScreen';
import SearchScreen from '../screens/servise/SearchScreen';
import RandomScreen from '../screens/servise/RandomScreen';
import BasketScreen from '../screens/servise/BasketScreen';
import UserScreen from '../screens/servise/UserScreen';

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
          return <View></View>; // 아이콘 만들어지면 수정해야 함.
          /* <Icons
              name={iconName}
              color={focused ? 'white' : 'grey'}
              size={26}
            /> */
        },
      })}
      tabBarOptions={{
        //showLabel: false,
        style: {
          borderTopColor: '#666666',
        },
      }}>
      <Tabs.Screen name="Main" component={MainScreen} />
      <Tabs.Screen name="Search" component={SearchScreen} />
      <Tabs.Screen name="Random" component={RandomScreen} />
      <Tabs.Screen name="Basket" component={BasketScreen} />
      <Tabs.Screen name="User" component={UserScreen} />
    </Tabs.Navigator>
  );
};
