import React, {useState, useEffect, useRef} from 'react';
import {View, Text} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {PERMISSIONS, checkMultiple} from 'react-native-permissions';

const PhotoCapture = () => {
  const [flash, setFlash] = useState('off');
  const [zoom, setZoom] = useState(0);
  const [autoFocus, setAutoFocus] = useState('on');
  const [depth, setDepth] = useState(0);
  const [type, setType] = useState('back');
  const [permission, setPermission] = useState({
    apple: 'undeterminded',
    android: 'undertermined',
  });
  const cameraRef = useRef(null);

  useEffect(() => {
    checkMultiple([PERMISSIONS.IOS.CAMERA, PERMISSIONS.ANDROID.CAMERA]).then(
      statuses => console.log(statuses)
    ).catch(err => console.log(err));
  }, []);

  return (
    <View style={{flex: 1}}>
      <RNCamera
        ref={cameraRef}
        style={{flex: 1, position: 'absolute', top: 0, left: 0, bottom: 0, right: 0}}
        type={type}
        flashMode={flash}
        captureAudio={false}
      />
    </View>
  );
};

export default PhotoCapture;
