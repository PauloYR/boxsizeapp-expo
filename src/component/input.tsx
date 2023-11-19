import React, { ChangeEvent, useState } from 'react';
import { TextInput, StyleSheet, View } from 'react-native';


interface InputProps {
  placeholder?: string;
  value?: string;
  setValue?: (newValue: string) => void;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
}

const Input: React.FC<InputProps> = ({ placeholder, value, onChangeText, secureTextEntry, setValue }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      onChangeText={(newValue: string) => {
        if (setValue) {
          setValue(newValue)
        }
        if (onChangeText) {
          onChangeText(newValue)
        }
      }}
      secureTextEntry={secureTextEntry}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 2,
    borderBottomColor: '#40CFFC',
    backgroundColor: '#fff',
    fontFamily: 'RobotoSerif-Regular',
    borderRadius: 10,
    padding: 10,
  },
});

export default Input;
