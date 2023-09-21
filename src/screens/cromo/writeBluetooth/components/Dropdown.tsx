import { Dispatch, SetStateAction } from 'react';
import RNPickerSelect from 'react-native-picker-select';

interface Props {
    setSelectedItem: Dispatch<SetStateAction<String>>
  }

export const Dropdown = ({setSelectedItem}: Props) => {
    const dropdownStyles = {
        inputIOS: {
          color: 'white', // Set the text color to white
        },
        inputAndroid: {
          color: 'white', // Set the text color to white for Android
        },
        // Add other styles as needed
      };

    return (
        <RNPickerSelect
            onValueChange={(value) => setSelectedItem(value)}
            items={[
                { label: 'Purple', value: 'magenta' },
                { label: 'Indigo', value: 'blue' },
                { label: 'Blue', value: 'cyan' },
                { label: 'Green', value: 'green' },
                { label: 'Yellow', value: 'yellow' },
                { label: 'Orange', value: 'orange' },
                { label: 'Red', value: 'red' },
              ]}
            style={dropdownStyles}
        />
    );
};