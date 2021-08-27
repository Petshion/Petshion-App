import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {useDispatch} from 'react-redux';
import {getAUTH, insert} from '../modules/auth';

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

  const dispatch = useDispatch();

  const getAUTHFn = async () => {
    const AUTH = await getAUTH();
    dispatch(insert(AUTH));
  };

  useEffect(() => {
    if (isFirstLaunch) {
      navigation.navigate('HowToUse');
    }
  }, [isFirstLaunch]);

  useEffect(() => {
    getAUTHFn();
  }, []);

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
          cardStyleInterpolator: CardStyleInterpolators.forBottomSheetAndroid,
          headerTitle: '',
          headerShown: true,
          headerTransparent: true,
          headerTintColor: '#000',
        }}
      />
      <Stack.Screen
        name="AR"
        component={ARScreen}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forBottomSheetAndroid,
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
          cardStyleInterpolator: CardStyleInterpolators.forBottomSheetAndroid,
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
