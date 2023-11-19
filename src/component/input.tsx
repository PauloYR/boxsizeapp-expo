import React, { ChangeEvent, useState } from 'react';
import { TextInput, StyleSheet, View, KeyboardTypeOptions } from 'react-native';


interface InputProps {
  placeholder?: string;
  value?: string;
  defaultValue?: string
  setValue?: (newValue: string) => void;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions | undefined;
}

const Input: React.FC<InputProps> = (
  {
    placeholder,
    value,
    defaultValue,
    onChangeText,
    secureTextEntry,
    setValue,
    keyboardType
  }
) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      defaultValue={defaultValue}
      keyboardType={keyboardType}
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
