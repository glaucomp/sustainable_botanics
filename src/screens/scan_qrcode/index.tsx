import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import {Camera} from 'react-native-camera-kit';
import {useNavigate} from 'react-router-native';
import Spinner from '../../components/Spinner';

//import i18n from '../../../../i18n';
import CrossIcon from '../../assets/icons/CrossIcon';

//import ExtractLoginFromQrCode from '../utils/ExtractLoginFromQrCode';

const ScanQrCode = () => {
  const [reading, setReading] = useState(false);
  const [modalVisible, setModalVisible] = useState(true);
  const navigate = useNavigate();

  const qrCodeScanned = async (readQrCode: string) => {
    setReading(true);
    console.log(readQrCode);
    //const extractQrcode = ExtractLoginFromQrCode(readQrCode);

    //if (extractQrcode) {
    //}
    setModalVisible(!modalVisible);
    navigate('/shelf');
    setReading(false);
  };

  if (reading) {
    return (
      <View className="flex-1 justify-center items-center">
        <Spinner darkMode />
        <Text>{i18n.t<string>('login.qrcode.logging_in')}</Text>
      </View>
    );
  }

  return (
    <View className="flex h-full w-full">
      <Modal
        style={styles.modalView}
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Camera
              // eslint-disable-next-line react-native/no-inline-styles
              style={{flex: 1, width: '100%', height: '100%'}}
              cameraType="back"
              scanBarcode
              showFrame
              laserColor="red"
              frameColor="white"
              onReadCode={async (event: {
                nativeEvent: {codeStringValue: any};
              }) => {
                !reading && qrCodeScanned(event.nativeEvent.codeStringValue);
              }}
              hideControls
            />
            <TouchableOpacity
              className="absolute ml-auto w-10 h-10 right-6 top-6"
              onPress={() => {
                setModalVisible(!modalVisible);
                navigate('/main');
              }}>
              <CrossIcon classes="text-white" />
            </TouchableOpacity>
          </View>
        </>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    elevation: 5,
    width: '100%',
    height: '100%',
  },
  camera: {
    flex: 1,
  },
});

export default ScanQrCode;
