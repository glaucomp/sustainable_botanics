import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {Camera} from 'react-native-camera-kit';
//import i18n from '../../../../i18n';
import CrossIcon from '../../assets/icons/CrossIcon';

//import ExtractLoginFromQrCode from '../utils/ExtractLoginFromQrCode';

interface Props {
  closeScanner: () => void;
}

const ScanLoginQrCode = ({closeScanner}: Props) => {
  const [reading, setReading] = useState(true);
  const qrCodeScanned = async (readQrCode: string) => {
    setReading(true);
    console.log(readQrCode);
    //const extractQrcode = ExtractLoginFromQrCode(readQrCode);

    //if (extractQrcode) {
    //}

    setReading(false);
    //closeScanner();
  };

  if (reading) {
    return (
      <>
        <Camera
          // eslint-disable-next-line react-native/no-inline-styles
          style={{flex: 1, width: '100%', height: '100%'}}
          cameraType="back"
          scanBarcode
          showFrame
          laserColor="red"
          frameColor="white"
          onReadCode={async (event: {nativeEvent: {codeStringValue: any}}) => {
            qrCodeScanned(event.nativeEvent.codeStringValue);
          }}
          hideControls
        />
      </>
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
