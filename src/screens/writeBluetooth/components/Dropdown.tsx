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
                { label: 'Red', value: 'red' },
                { label: 'Blue', value: 'blue' },
                { label: 'Green', value: 'green' },
                { label: 'Yellow', value: 'yellow' },
                { label: 'Magenta', value: 'magenta' },
                { label: 'Cyan', value: 'cyan' },
            ]}
            style={dropdownStyles}
        />
    );
};