/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';

import Stack from './navigation/Stack';
import store from './modules';
import checkFirstLaunch from './modules/checkFirstLaunch';

const App = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(false);

  const checkFirstLaunchFn = async () => {
    const isFirstLaunch = await checkFirstLaunch();
    if (isFirstLaunch) {
      setIsFirstLaunch(true);
    }
  };

  useEffect(() => {
    checkFirstLaunchFn();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack isFirstLaunch={isFirstLaunch} />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
