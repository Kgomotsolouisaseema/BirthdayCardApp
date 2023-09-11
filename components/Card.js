import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Alert,
  Pressable,
  Modal,
  ScrollView,
} from "react-native";
import { TextInput } from "react-native";
import { KeyboardAvoidingView } from "react-native";

//using yup for validation
import * as yup from "yup"; // Import yup for validation

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  message: yup.string().required("Message is required"),
  sender: yup.string().required("Sender is Required"),
});

const Card = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [sender, setSender] = useState("");
  const [modalVisible, setModalVisible] = useState(false); // State for modal visibility
  const [birthdayMessage, setBirthdayMessage] = useState(""); // State for birthday message

  const sendMessage = async () => {
    // Check if any of the input fields is empty
    if (!name || !message || !sender) {
      Alert.alert("Please fill in all fields before sending the message.");
      return; // Exit the function early if any field is empty
    }
    try {
      await schema.validate({
        name: name,
        message: message,
        sender: sender,
      });
      //validate successful
      Alert.alert("Message Sent");
      setModalVisible(true);
      setBirthdayMessage(`To: ${name}\nMessage: ${message}\nFrom: ${sender}`);
    } catch (error) {
      //validate unsuccess
      Alert.alert("Validation Error", error.message);
    }
  };

  return (
    <ScrollView>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled>
        <View style={styles.container}>
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
              placeholder="Enter the recipient's name"
              onChangeText={(text) => setName(text)}
            />

            <TextInput
              style={styles.textInput}
              placeholder="birthday Message"
              onChangeText={(text) => setMessage(text)}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Senders name :"
              onChangeText={(text) => setSender(text)}
            />
          </View>
          <View style={styles.actionButton}>
            <Pressable style={styles.sendBtn} onPress={sendMessage}>
              <Text style={styles.sendmsg}>Send Wishes</Text>
            </Pressable>
            <View style={styles.modalView}>
              <Modal
                animationType="none"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                  Alert.alert("Modal is closed . ");
                  setModalVisible(!modalVisible); //hide the modal when closed
                }}
              >
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>{birthdayMessage} </Text>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(false)}
                  >
                    <Text style={styles.textStyle}>Close Birthday Message</Text>
                  </Pressable>
                </View>
              </Modal>
            </View>
          </View>
        </View>
        {/* {messageComponent} */}
        {/* <Message
        modalVisible={modalVisible}
        birthdayMessage={birthdayMessage}
        setModalVisible={setModalVisible}
      /> */}
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    backgroundColor: "#FFBCD9",
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
  appName: {
    fontSize: 20,
    flexDirection: "row",
    fontWeight: "italic",
    width: 150,
    height: 150,
  },

  bottomContainer: {
    // backgroundColor : 'green',
    width: "50%",
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
    backgroundColor: "#FF1493",
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
  // centeredView :{
  //   flex: 1,
  //   justifyContent: 'center',
  //   height: 80 ,
  //   width: 80 ,
  //   alignItems: 'top',
  //   marginTop: 35,
  // },

  modalView: {
    // margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    // padding : 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  button: {
    borderRadius: 20,
    padding: 10,
  },

  buttonOpen: {
    backgroundColor: "#F194FF",
  },

  buttonClose: {
    backgroundColor: "#FF1493",
  },

  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Card;
