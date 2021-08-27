import React, {useRef} from 'react';
import styled from 'styled-components/native';
import {PermissionsAndroid, Platform} from 'react-native';
import ViewShot from 'react-native-view-shot';
import CameraRoll from '@react-native-community/cameraroll';
import {ViroARSceneNavigator} from 'react-viro';
import ARView from '../../../components/AR/ARView';
import {Text} from 'react-native';

const VRWrap = styled.View`
  flex: 1;
  align-items: center;
  background-color: green;
`;

const CaptureButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 60px;
`;

const CaptureButtonView = styled.View`
  width: 62.1px;
  height: 62.1px;
  border: 5px solid #f4d540;
  border-radius: 50px;
`;

export default () => {
  const captureRef = useRef<ViewShot>(null);

  const getPhotoUri = async () => {
    const uri: any = await captureRef?.current?.capture?.();

    return uri;
  };

  const hasAndroidPermission = async () => {
    try {
      const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;
      await PermissionsAndroid.request(permission);
      Promise.resolve();
      console.log(Promise.resolve());
    } catch (error) {
      Promise.reject(error);
      console.log(Promise.resolve(error));
    }
  };

  const onSave = async () => {
    if (Platform.OS === 'android') {
      await hasAndroidPermission();
    }

    const uri = await getPhotoUri();
    const result = await CameraRoll.save(uri);
    console.log('🐤result', result);
  };

  return (
    <VRWrap>
      <ViewShot
        ref={captureRef}
        options={{format: 'jpg', quality: 1.0}}
        style={{flex: 1}}>
        <Text style={{flex: 1, backgroundColor: 'white'}}>
          weoifjweoifjweiofjwefioj
        </Text>
        {/* <ViroARSceneNavigator autofocus initialScene={{scene: ARView}} /> */}
      </ViewShot>
      <CaptureButton onPress={onSave}>
        <CaptureButtonView />
      </CaptureButton>
    </VRWrap>
  );
};
