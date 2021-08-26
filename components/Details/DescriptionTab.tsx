import React from 'react';
import {useWindowDimensions} from 'react-native';
import RenderHtml from 'react-native-render-html';
import styled from 'styled-components/native';

interface Content {
  content: string;
}

const View = styled.View`
  flex: 1;
  padding: 0 20px;
  background-color: #fff;
`;

const Text = styled.Text``;

const source = {
  html: `<img
  src="https://pds.joins.com/news/component/htmlphoto_mmdata/201310/28/htm_2013102810154430103011.jpg"
  style="width: 100%; height: auto;"
  />`,
};

const renderersProps = {
  img: {
    enableExperimentalPercentWidth: true,
  },
};

export default ({content}: Content) => {
  const {width} = useWindowDimensions();

  return (
    <View>
      <Text>{content}</Text>
      {/* <RenderHtml
        contentWidth={width - 40}
        source={source}
        renderersProps={renderersProps}
      /> */}
    </View>
  );
};
