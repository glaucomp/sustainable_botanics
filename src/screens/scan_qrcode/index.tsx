import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Camera} from 'react-native-camera-kit';
import i18n from '../../../../i18n';
import CrossIcon from '../../../assets/icons/CrossIcon';

import ExtractLoginFromQrCode from '../utils/ExtractLoginFromQrCode';

interface Props {
  closeScanner: () => void;
}

const ScanLoginQrCode = ({closeScanner}: Props) => {
  const [reading, setReading] = useState(false);

  const qrCodeScanned = async (readQrCode: string) => {
    setReading(true);
    const extractQrcode = ExtractLoginFromQrCode(readQrCode);

    if (extractQrcode) {
    }

    setReading(false);
    closeScanner();
  };

  if (loggingIn) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text>{i18n.t<string>('login.qrcode.logging_in')}</Text>
      </View>
    );
  }

  return (
    <>
      <Camera
        // eslint-disable-next-line react-native/no-inline-styles
        style={{flex: 1, justifyContent: 'flex-end'}}
        cameraType="back"
        scanBarcode
        showFrame
        laserColor="red"
        frameColor="white"
        onReadCode={async (event: {nativeEvent: {codeStringValue: any}}) => {
          !reading && qrCodeScanned(event.nativeEvent.codeStringValue);
        }}
        hideControls
      />
      <TouchableOpacity
        testID="button.closeScanner"
        className="absolute ml-auto w-10 h-10 right-6 top-6"
        onPress={closeScanner}>
        <CrossIcon classes="text-white" />
      </TouchableOpacity>
    </>
  );
};

export default ScanLoginQrCode;
