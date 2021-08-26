import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import Tabs from './Tabs';
import ProductScreen from '../screens/details/Product';
import ARScreen from '../screens/details/AR';
import HowToUseScreen from '../screens/details/HowToUse';
import TermsOfServiceScreen from '../screens/details/TermsOfService';
import HeaderTitle from '../components/AR/HeaderTitle';
import CloseButton from '../components/CloseButton';

const Stack = createStackNavigator();

export default ({isFirstLaunch}) => {
  const navigation = useNavigation<any>();

  useEffect(() => {
    if (isFirstLaunch) {
      navigation.navigate('HowToUse');
    }
  }, [isFirstLaunch]);

  return (
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
      <Stack.Screen
        name="AR"
        component={ARScreen}
        options={{
          headerTitle: '',
          headerRight: () => <HeaderTitle />,
          headerShown: true,
          headerTransparent: true,
          headerTintColor: '#000',
        }}
      />
      <Stack.Screen
        name="TermsOfService"
        component={TermsOfServiceScreen}
        options={{
          headerTitle: '서비스 이용 약관',
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="HowToUse"
        component={HowToUseScreen}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forBottomSheetAndroid,
          headerTitle: '사용방법',
          headerLeft: () => <CloseButton name={'close'} />,
        }}
      />
    </Stack.Navigator>
  );
};
