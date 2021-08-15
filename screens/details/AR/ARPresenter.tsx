import React, {useRef} from 'react';
import styled from 'styled-components/native';
import {PermissionsAndroid, Platform} from 'react-native';
import ViewShot from 'react-native-view-shot';
import CameraRoll from '@react-native-community/cameraroll';

import {Text} from '../../../components/Text';

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
  const captureRef = useRef(null);

  const getPhotoUri = async () => {
    let uri = '';
    if (captureRef.current) {
      uri = await captureRef.current!.capture();
    }
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
      <ViewShot ref={captureRef} options={{format: 'jpg', quality: 1.0}}>
        <Text style={{backgroundColor: '#fff'}}>hello world</Text>
      </ViewShot>
      <CaptureButton onPress={onSave}>
        <CaptureButtonView />
      </CaptureButton>
    </VRWrap>
  );
};