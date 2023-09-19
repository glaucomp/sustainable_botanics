import React, {Dispatch, SetStateAction, useState} from 'react';
import {Button, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import LabelText from '../../../components/LabelText';
import FormInput from '../../../components/FormInput';
import CrossIcon from '../../../assets/icons/CrossIcon';

interface Props {
  setModalSignUp: Dispatch<SetStateAction<boolean>>;
}

const SignUp = ({setModalSignUp}: Props) => {
    const [nameError, setNameError] = useState<string>()
    const [name, setName] = useState<string>()

    const [lastNameError, setLastNameError] = useState<string>()
    const [lastName, setLastName] = useState<string>()

    const [emailError, setEmailError] = useState<string>()
    const [email, setEmail] = useState<string>()

    const [passwordError, setPasswordError] = useState<string>()
    const [password, setPassword] = useState<string>()

    const [repasswordError, setRePasswordError] = useState<string>()
    const [repassword, setRePassword] = useState<string>()

    const [birthdayError, setBirthdayError] = useState<string>()
    const [birthday, setBirthday] = useState<string>()
    
  return (
    <ScrollView>
      <View
        className="flex h-screen w-screen justify-center items-center content-center"
        style={{backgroundColor: '#042918'}}>
        <TouchableOpacity
          className="ml-auto w-10 h-10 mr-4 mb-4"
          onPress={() => {
            setModalSignUp(false);
          }}>
          <CrossIcon classes="text-white" />
        </TouchableOpacity>
        <FormInput
          label="Name"
          onChangeText={text => {
            setNameError(undefined);
            setName(text);
          }}
          //error={titleError}
        />
        <FormInput
          label="Last Name"
          onChangeText={text => {
            setLastNameError(undefined);
            setLastName(text);
          }}
          //error={titleError}
        />

        <FormInput
          label="Email"
          onChangeText={text => {
            setEmailError(undefined);
            setEmail(text);
          }}
          //error={titleError}
        />
        <FormInput
          label="Password"
          onChangeText={text => {
            setPasswordError(undefined);
            setPassword(text);
          }}
          //error={titleError}
        />
        <FormInput
          label="Confirm Password"
          onChangeText={text => {
            setRePasswordError(undefined);
            setRePassword(text);
          }}
          //error={titleError}
        />
        <FormInput
          label="Birthday"
          onChangeText={text => {
            setBirthdayError(undefined);
            setBirthday(text);
          }}
          //error={titleError}
        />
        <Button title="Save" onPress={() => setModalSignUp(false)} />
      </View>
    </ScrollView>
  );
};
export default SignUp;
