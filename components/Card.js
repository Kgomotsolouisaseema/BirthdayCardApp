
import React,{ useState } from "react";
import { View, Text, StyleSheet ,Image ,TouchableOpacity, Alert } from 'react-native';
import { TextInput } from 'react-native';



const Card = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [sender,  setSender] = useState("");
  
 const sendMessage = () =>{
  schema
  .isValid({
    name : name,
    message:message,
    sender:sender
    
  })
  Alert.alert("Message Sent")
 }

  return (
    <View style={styles. container}>
      <View style={styles.topContainer}> 
      <Text style={styles.appName}>Birthday Card !</Text>
       <Image
            style={styles.image}
            source={require("../assets/birthday1.jpg")}
          />
      </View>
      <View style={styles.bottomContainer}>
      <TextInput
              style={styles.textInput}
              placeholder="Birthday person :"
              onChangeText={(text) => setName(text)}
            />

            <TextInput
              style={styles.textInput}
              placeholder="Birthday Message"
              onChangeText={(text) => setMessage(text)}
            />
            <TextInput
              style={styles.textInput}
              placeholder="From :"
              onChangeText={(text) => setSender(text)}
            />

      </View>
      <View style={styles. actionButton}>
                <TouchableOpacity style={styles.sendBtn}  onPress={sendMessage}> 
                <Text style={styles.sendmsg}>Send Wishes</Text>
                </TouchableOpacity>
            </View>
    </View>
  );
};


export default Card;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%' ,
      alignItems: 'center', 
      backgroundColor: 'Teal ',
      padding: 20,
      borderRadius: 10,
      margin: 10,
    },

    topContainer: {
      height: 280,
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
 
    },
    image: {
      width: 300,
      height: 250,
      borderRadius: 150,
    },
    appName:{
      fontSize :20 ,
      flexDirection: 'row',
      fontWeight: 'italics',
      width: 150,
      height: 150,
      
    },

    bottomContainer:{
      // backgroundColor : 'green',
      width: '50%',
      width: 200,
      height: 200,
    },
    textInput: {
      //fields for email and password
      borderRadius: 15,
      borderColor: "black",
      borderWidth: 1,
      padding: 10,
      height: 46,
      width: 210,
      // height: 46,
      alignItems: "center",
      marginVertical: 15, //spaces in between the input areas
    },
   
  actionButton: {
    backgroundColor: "purple",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    width: 280, //width of the send button ,
    height: 46,
    marginVertical: 10,
  },

  sendmsg: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },

  });
  