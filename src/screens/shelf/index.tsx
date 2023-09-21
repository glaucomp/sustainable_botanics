import React, {useState} from 'react';
import {Text, FlatList, TouchableOpacity, View, Modal} from 'react-native';
import BluetoothSerial from 'react-native-bluetooth-serial';
import { useNavigate } from 'react-router-native';

const ShelfScreen = () => {
  const navigate = useNavigate();

  const [availableDevices, setAvailableDevices] = useState([]);

  const connectToDevice = (deviceId: any) => {
    // Handle device selection here, e.g., connect to the selected device
    BluetoothSerial.connect(deviceId)
      .then(() => {
        console.log('Connected to device:', deviceId);
        // Send data to the connected device or perform other actions
        // BluetoothSerial.write("green").then((bytesWritten) => {
        //   console.log('Bytes written:', bytesWritten);
        // }).catch((error) => {
        //   console.error('Error writing data:', error);
        // });
      })
      .catch((error: any) => {
        console.error('Error connecting to device:', error);
      });
  };

  BluetoothSerial.list().then((devices: any) => {
    // 'devices' will contain a list of nearby Bluetooth devices
    setAvailableDevices(devices);
    //console.log('Available devices: ', devices);
    //connectToDevice("98:D3:31:F6:E2:5B");
  });

  /*
  BluetoothSerial.connect('98:D3:31:F6:E2:5B')
    .then(() => {
      console.log('Connected to device:', '98:D3:31:F6:E2:5B');
    })
    .catch((error: any) => {
      console.error('Error connecting to device:', error);
    });
    */

  /*
    // Send data to the connected device
BluetoothSerial.write("green")
.then((bytesWritten: any) => {
  console.log('Bytes written:', bytesWritten);
})
.catch((error: any) => {
  console.error('Error writing data:', error);
});
*/
  //})
  //.catch((error: any) => {
  //console.error('Error connecting to device:', error);
  //});

  const filteredDevices = availableDevices.filter(device => device.name.startsWith('SB'));

  return (
    <View style={{flex: 1, backgroundColor: '#052918'}}>
      <Text className="text-3xl font-extrabold mb-2 text-slate-700"></Text>

      <Text className="text-xl font-semibold mb-2 text-white">
        Available Devices:
      </Text>

      <FlatList
        data={filteredDevices}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigate(`/write_bluetooth/${item.id}`)}
            style={{
              padding: 10,
              borderBottomWidth: 1,
              borderColor: '#ccc',
            }}>
            <View>
              <Text className="text-xl font-semibold mb-2 text-white">
                {item.name}
              </Text>
              <Text className="text-l font-semibold mb-2 text-white">
                {item.id}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
export default ShelfScreen;
