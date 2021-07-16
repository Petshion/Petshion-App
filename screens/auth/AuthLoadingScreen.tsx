import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';

function AuthLoadingScreen() {
  return (
    <View>
      <Text>Loading...</Text>
      <ActivityIndicator size="large"></ActivityIndicator>
    </View>
  );
}

export default AuthLoadingScreen;
