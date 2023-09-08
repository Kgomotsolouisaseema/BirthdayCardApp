import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Sender = ({ name }) => {
  return <Text style={styles.sender}>From: {name}</Text>;
};

const styles = StyleSheet.create({
  sender: {
    fontSize: 16,
    fontStyle: 'italic',
  },
});

export default Sender;
