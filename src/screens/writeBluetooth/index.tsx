import React, {useState} from 'react';
import {Text, TouchableOpacity, View, Pickera, Button} from 'react-native';
import BluetoothSerial from 'react-native-bluetooth-serial';
import CrossIcon from '../../assets/icons/CrossIcon';
import {useNavigate, useParams} from 'react-router-native';
import FormInput from '../../components/FormInput';

interface Props {
  itemSelected: string;
}

const WhiteBluetooth = ({itemSelected}: Props) => {
  const navigate = useNavigate();
  const {deviceId = '-1'} = useParams();
  const [selectedValue, setSelectedValue] = useState('red');
  const [nameError, setNameError] = useState<string>();
  const [name, setName] = useState<string>();

  console.log('PASSOU', 'AQUI');

  const handleCheckboxToggle = (color: string) => {
    connectToDevice('98:D3:31:F6:E2:5B', color);
  };

  const connectToDevice = (deviceId: any, color: string) => {
    console.log('trying to connecting to device:', deviceId);

    BluetoothSerial.connect(deviceId)
      .then(() => {
        console.log('Connected to device:', deviceId);
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
    <View
      className="flex h-screen w-screen justify-center items-center content-center"
      style={{backgroundColor: '#042918'}}>
      <TouchableOpacity
        className="ml-auto w-10 h-10 mr-4 mb-4"
        onPress={() => {
          navigate('/shelf');
        }}>
        <CrossIcon classes="text-white" />
      </TouchableOpacity>

      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text className="text-xl font-semibold mb-2 text-white">
          {deviceId}
        </Text>
        <FormInput
          label=""
          onChangeText={text => {
            setNameError(undefined);
            setName(text);
          }}
          //error={titleError}
        />
        <Button title="Save" onPress={() => handleCheckboxToggle(name)} />
      </View>
    </View>
  );
};
export default WhiteBluetooth;
