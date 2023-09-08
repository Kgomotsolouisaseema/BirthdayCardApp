import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Message = () => {
  return (
  <Text style={styles.message}></Text>
  )
};

const styles = StyleSheet.create({
  message: {
    fontSize: 18,
    marginBottom: 15,
  },
});

export default Message;
