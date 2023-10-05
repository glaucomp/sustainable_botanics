import React, {useEffect, useState} from 'react';
import {FlatList, TouchableOpacity, View, Modal, PermissionsAndroid} from 'react-native';
import BluetoothSerial from 'react-native-bluetooth-serial';
import {useNavigate} from 'react-router-native';
import LabelText from '../../components/LabelText';

const CromoScreen = () => {
  const navigate = useNavigate();
  const [availableDevices, setAvailableDevices] = useState([]);

  useEffect(() => {
    // Request Bluetooth permissions when the component is mounted
    async function requestBluetoothPermission() {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
          {
            title: 'Bluetooth Permission',
            message: 'Sustainable Botanics needs access to Bluetooth.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Bluetooth permission granted');
          BluetoothSerial.requestEnable();
          // List available Bluetooth devices
          BluetoothSerial.list().then(devices => {
            setAvailableDevices(devices);
          });
        } else {
          console.log('Bluetooth permission denied');
        }
      } catch (err) {
        console.error('Error requesting Bluetooth permission:', err);
      }
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
          {
            title: 'Bluetooth Permission',
            message: 'Sustainable Botanics needs access to Bluetooth.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Bluetooth permission granted');
          BluetoothSerial.requestEnable();
          // List available Bluetooth devices
          BluetoothSerial.list().then(devices => {
            setAvailableDevices(devices);
          });
        } else {
          console.log('Bluetooth permission denied');
        }
      } catch (err) {
        console.error('Error requesting Bluetooth permission:', err);
      }
    }
    // Call the permission request function when the component mounts
    requestBluetoothPermission();
  }, []); 
  
  const filteredDevices = availableDevices.filter(device =>
    device.name.startsWith('SB'),
  );

  return (
    <View style={{flex: 1, backgroundColor: '#052918'}}>
      <LabelText className="text-3xl font-extrabold mb-2"></LabelText>

      <LabelText className="text-xl font-semibold mb-2">
        Available Devices:
      </LabelText>

      <FlatList
        data={filteredDevices}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigate(`/write_bluetooth/${item.name+";"+item.id}`)}
            style={{
              padding: 10,
              borderBottomWidth: 1,
              borderColor: '#ccc',
            }}>
            <View>
              <LabelText className="text-xl font-semibold mb-2">
                {item.name}
              </LabelText>
              <LabelText className="text-l font-semibold mb-2">
                {item.id}
              </LabelText>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
export default CromoScreen;
