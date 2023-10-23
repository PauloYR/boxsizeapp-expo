import React, { useState } from 'react';
import { TextInput, StyleSheet, View } from 'react-native';

interface InputProps {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
}

const Input: React.FC<InputProps> = ({ placeholder, value, onChangeText }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
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
    marginBottom: 10,
  },
});

export default Input;
