// import React, { useState } from "react";
import {Alert , Modal , StyleSheet , Text,Pressable , View}from 'react-native'


 const  Message = ({modalVisible, birthdayMessage, setModalVisible }) =>{
  // const [modalVisible  , setModalVisible]= useState(false);
  return(
    <View style={styles.centeredView}>
      <Modal 
      animationType="none"
      transparent = {true}
      visible = {false}
      onRequestClose={()=>{
        Alert.alert('Modal is closed . ');
        setModalVisible(false);//hide the modal when closed 
      }}>
        <View style={styles.centeredView}>
          <View  style={styles.modalView}>
            <Text style ={styles.modalText}>{birthdayMessage} </Text>
            <Pressable
            style={[styles.button ,styles.buttonClose]}
            onPress={() => setModalVisible(false)}>
              <Text style={styles.textStyle}>Close Birthday Message</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    

    </View>
  );
};
const styles = StyleSheet.create({
  centeredView :{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView:{
    margin: 20,
    backgroundColor:  'white',
    borderRadius : 20,
    padding : 35,
    alignItems: 'center',
    shadowColor:'#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button:{
    borderRadius: 20,
    padding : 10,
  },

  buttonOpen : {
    backgroundColor : '#F194FF'
  },

  buttonClose: {
    backgroundColor: '#2196F3' , 
  },
  textStyle: {
    color: 'white' , 
    fontWeight : 'bold' ,
    textAlign: 'center',
  },

})

export default Message ;


