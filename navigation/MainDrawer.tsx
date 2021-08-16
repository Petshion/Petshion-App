import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import MainScreen from '../screens/servise/Main';
import SideItem from '../components/Main/SideItem';

const Drawer = createDrawerNavigator();

export default () => {
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false, drawerPosition: 'right'}}
      drawerContent={() => <SideItem />}
      initialRouteName="MainDrawer">
      <Drawer.Screen name="MainDrawer" component={MainScreen} />
    </Drawer.Navigator>
  );
};
