import React, {useState} from 'react';
import {Text, FlatList, TouchableOpacity, View, Modal} from 'react-native';
import BluetoothSerial from 'react-native-bluetooth-serial';
import {useNavigate} from 'react-router-native';
import LabelText from '../../components/LabelText';

const CromoScreen = () => {
  const navigate = useNavigate();

  const [availableDevices, setAvailableDevices] = useState([]);

  BluetoothSerial.list().then((devices: any) => {
    // 'devices' will contain a list of nearby Bluetooth devices
    setAvailableDevices(devices);
    //console.log('Available devices: ', devices);
    //connectToDevice("98:D3:31:F6:E2:5B");
  });
  
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
