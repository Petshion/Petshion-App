import React, {useRef} from 'react';
import styled from 'styled-components/native';
import {Dimensions, PermissionsAndroid, Platform, Text} from 'react-native';
import ViewShot from 'react-native-view-shot';
import CameraRoll from '@react-native-community/cameraroll';
import {RNCamera} from 'react-native-camera';
import {Colors} from 'react-native/Libraries/NewAppScreen';

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

const TestView = styled.View`
  position: relative;
  justify-content: center;
  align-items: center;
`;

const VRImage = styled.Image`
  width: 150px;
  height: 200px;
  position: absolute;
`;

export default ({AR_image}) => {
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
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TestView>
          <RNCamera
            style={{
              flex: 1,
              position: 'relative',
              width: Dimensions.get('window').width,
              backgroundColor: Colors.profileTabSelectedColor,
            }}
            type={RNCamera.Constants.Type.back}
            captureAudio={false}
          />
          <VRImage
            source={{
              uri: AR_image,
            }}
            style={{resizeMode: 'contain'}}
          />
        </TestView>
      </ViewShot>
      {/* <CaptureButton onPress={onSave}>
        <CaptureButtonView />
      </CaptureButton> */}
    </VRWrap>
  );
};
