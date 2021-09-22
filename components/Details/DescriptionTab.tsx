import React from 'react';
import RenderHtml from 'react-native-render-html';
import AutoHeightWebView from 'react-native-autoheight-webview';
import styled from 'styled-components/native';

interface Content {
  content: string;
}

const ScrollView = styled.ScrollView`
  padding: 0 20px;
  background-color: #fff;
`;

const StyledAutoHeightWebView = styled(AutoHeightWebView)`
  width: 100%;
`;

export default ({content}: Content) => {
  const source = {
    html: `<img
    src="${content}""
    style="width: 100%; height: auto;"
    />`,
  };

  return (
    <ScrollView nestedScrollEnabled={true}>
      <StyledAutoHeightWebView
        cacheEnabled={true}
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
        originWhitelist={['*']}
        source={source}
        startInLoadingState={true}
        pointerEvents="none"
        style={{marginBottom: 100}}
      />
    </ScrollView>
  );
};
