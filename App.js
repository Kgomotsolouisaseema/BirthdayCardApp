import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Card from './components/Card';
import Message from './components/Message';



export default function App() {
  return (
    <View style={styles.container}>
     <Card  />   
      {/* <Card messageComponent={<Message} />  */}
     <Message/>
     
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
