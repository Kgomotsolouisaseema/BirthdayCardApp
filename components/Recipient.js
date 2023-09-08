import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Recipient = ({ name }) => {
  return <Text style={styles.recipient}>To: {name}</Text>;
};

const styles = StyleSheet.create({
  recipient: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default Recipient;
