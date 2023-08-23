import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {Camera} from 'react-native-camera-kit';
import i18n from '../../../../i18n';

//import ExtractLoginFromQrCode from '../utils/ExtractLoginFromQrCode';

interface Props {
  closeScanner: () => void;
}

const ScanQrCode = ({closeScanner}: Props) => {
  const [reading, setReading] = useState(false);

  const qrCodeScanned = async (readQrCode: string) => {
    setReading(true);
    //const extractQrcode = ExtractLoginFromQrCode(readQrCode);
    console.log(readQrCode);
    //if (extractQrcode) {
    //}

    setReading(false);
    closeScanner();
  };

  if (reading) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text>{i18n.t<string>('login.qrcode.logging_in')}</Text>
      </View>
    );
  }

  return (
    <>
      <View className="flex h-full w-full bg-cover">
        <Camera
          // eslint-disable-next-line react-native/no-inline-styles
          style={{width: '100%', height: '100%'}}
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
      </View>
    </>
  );
};

export default ScanQrCode;
