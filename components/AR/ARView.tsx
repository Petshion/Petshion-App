import React, {Component} from 'react';

import {StyleSheet} from 'react-native';

import styled from 'styled-components/native';

import {ViroARScene, ViroText, ViroConstants, ViroImage} from 'react-viro';

const Loading = styled.Text``;

export default class ARView extends Component {
  constructor() {
    super();

    // Set initial state here
    this.state = {
      text: 'Initializing AR...',
    };

    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this);
  }

  render() {
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized}>
        <ViroImage
          scale={[0.5, 0.7, 0.5]}
          mipmap
          resizeMode="ScaleToFill"
          position={[0, 0, -1]}
          placeholderSource={require('../../assets/loading-buffering.gif')}
          source={{
            uri: 'https://www.unger.dev/assets/200ok_logo_big.png',
          }}
        />
      </ViroARScene>
    );
  }

  _onInitialized(state: any, reason: any) {
    if (state == ViroConstants.TRACKING_NORMAL) {
      this.setState({
        text: 'Hello rn',
      });
    } else if (state == ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }
}
