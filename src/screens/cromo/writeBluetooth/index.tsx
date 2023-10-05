import React, {useState} from 'react';
import {Alert, Image, Text, TouchableOpacity, View} from 'react-native';
import BluetoothSerial from 'react-native-bluetooth-serial';
import CrossIcon from '../../../assets/icons/CrossIcon';
import {useNavigate, useParams} from 'react-router-native';
import {Dropdown} from './components/Dropdown';
import LabelText from '../../../components/LabelText';
import Spinner from '../../../components/Spinner';
import i18n from '../../../../i18n';

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
  const [reading, setReading] = useState(false);

  const connectToDevice = (color: string) => {
    console.log('trying to connecting to device:', deviceIdSplited);
    setReading(true);
    try{
      BluetoothSerial.connect(deviceIdSplited)
      .then(() => {
        console.log('Connected to device:', deviceIdSplited);
        setReading(false);
        BluetoothSerial.write(color)
          .then(() => {
            console.log('Bytes written:', color);
            // Disconnect from the device
            //BluetoothSerial.disconnect()
              //.then(() => {
                //console.log(`disconnected`);
              //})
              //.catch((err: any) => {
                //console.error(`Error disconnecting from the device: ${err}`);
                //setReading(false);
              //});
          })
          .catch((error: any) => {
            console.error('Error writing data:', error);
            BluetoothSerial.disconnect();
            setReading(false);
          });
      })
      .catch((error: any) => {
        //Alert.alert(
         //'Error connecting to device'
       //)
        console.error('Error connecting to device:', error);
        setSelectedItem('');
        setReading(false);
        //navigate('/cromo');
      });
    }catch(e){
      console.log('error', e);
    }
   
  };

  if (reading) {
    return (
      <View className="flex-1 justify-center items-center"  style={{backgroundColor: '#052918'}}>
        <Spinner  />
        <Text  className="text-white mt-2" >{i18n.t('write_bluetooth.loading')}</Text>
      </View>
    );
  }

  return (
    <View style={{flex: 1, backgroundColor: '#052918', padding: 20}}>
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
      <View className="flex justify-center items-center">
        {selectedItem === 'red' && (
          <Image
            source={require('../../../assets/root_chakra.png')}
            style={{tintColor: 'red' }} 
          />
        ) }
        {selectedItem === 'orange' && (
          <Image
            source={require('../../../assets/sacral_chakra.png')}
            style={{tintColor: 'orange' }} 
          />
        )} 
        { selectedItem === 'yellow' && (
          <Image
            source={require('../../../assets/solar_plexus_chakra.png')}
            style={{tintColor: 'yellow' }} 
          />
        )} 
        { selectedItem === 'green' && (
          <Image
            source={require('../../../assets/heart_chakra.png')}
            style={{tintColor: 'green' }} 
          />
        ) }
        {selectedItem === 'cyan' && (
          <Image
            source={require('../../../assets/throat_chakra.png')}
            style={{tintColor: 'cyan' }} 
          />
        )}
        { selectedItem === 'blue' && (
          <Image
            source={require('../../../assets/third_eye_chakra.png')}
            style={{tintColor: 'blue' }} 
          />
        )}
        {selectedItem === 'magenta' && (
          <Image
            source={require('../../../assets/crown_chakra.png')}
            style={{tintColor: 'magenta' }} 
          />
        )}
      </View>

      {selectedItem && handleWriteBluetooth(selectedItem)}
    </View>
  );
};
export default WhiteBluetooth;
