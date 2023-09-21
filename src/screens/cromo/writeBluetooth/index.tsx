import React, {Dispatch, SetStateAction, useState} from 'react';
import {Text, TouchableOpacity, View, Button} from 'react-native';
import BluetoothSerial from 'react-native-bluetooth-serial';
import CrossIcon from '../../../assets/icons/CrossIcon';
import {useNavigate, useParams} from 'react-router-native';
import { Dropdown } from './components/Dropdown';
import LabelText from '../../../components/LabelText';


const WhiteBluetooth = () => {
  const navigate = useNavigate();
  const {deviceId = '-1'} = useParams();
  const [selectedItem, setSelectedItem] = useState<string>('');
  const parts = deviceId.split(';');
    const deviceIdSplited = parts[1];
    const name = parts[0];
  const handleWriteBluetooth = (color: string) => {
    connectToDevice(color);
  };

  const connectToDevice = (color: string) => {
  
    console.log('trying to connecting to device:', deviceIdSplited);
    BluetoothSerial.connect(deviceIdSplited)
      .then(() => {
        console.log('Connected to device:', deviceIdSplited);
        BluetoothSerial.write(color)
          .then((bytesWritten: any) => {
            console.log('Bytes written:', color);

            // Disconnect from the device
            BluetoothSerial.disconnect()
              .then(() => {
                console.log(`disconnected`);
              })
              .catch(err => {
                console.error(`Error disconnecting from the device: ${err}`);
              });
          })
          .catch((error: any) => {
            console.error('Error writing data:', error);
            BluetoothSerial.disconnect();
          });
      })
      .catch((error: any) => {
        console.error('Error connecting to device:', error);
      });
  };

  return (
    <View style={{flex: 1, backgroundColor: '#052918',padding:20}}>
      <TouchableOpacity
        className="ml-auto w-10 h-10 mr-4 mb-4 mt-20"
        onPress={() => {
          navigate('/cromo');
        }}>
        <CrossIcon classes="text-white" />
      </TouchableOpacity>
        <LabelText className="text-xl font-semibold mb-2 text-white">
          {name}
        </LabelText>
        <Dropdown setSelectedItem={setSelectedItem} />
        {selectedItem &&  handleWriteBluetooth(selectedItem) }
    </View>
  );
};
export default WhiteBluetooth;
