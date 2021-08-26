import React from 'react';
import {WebView} from 'react-native-webview';

export default () => {
  return (
    <WebView
      source={{
        uri: 'https://cyclic-polish-a27.notion.site/5141380f8b9c46db86595c694a87e47f',
      }}
      containerStyle={{marginTop: -45}}
    />
  );
};
