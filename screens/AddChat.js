import { StyleSheet, Text, View } from "react-native";
import React, { useState, useLayoutEffect } from "react";
import { Button, Icon, Input } from "react-native-elements";
import { collection, addDoc, getFirestore } from "firebase/firestore/lite";
import {app} from "../firebase";
const db = getFirestore(app);
const AddChat = ({ navigation }) => {
  const [input, setInput] = useState("");
  useLayoutEffect(
    () =>
      navigation.setOptions({
        title: "Add a New Chat",
      }),
    []
  );
  const createChat = async () => {
    await addDoc(collection(db, "chats"), {
      chatName: input,
    })
      .then(() => navigation.goBack())
      .catch((err) => console.log(err));
  };
  return (
    <View style={styles.container}>
      <Input
        placeholder="Enter the chat"
        value={input}
        onChangeText={(text) => setInput(text)}
        leftIcon={
          <Icon name="wechat" type="antdesign" size={24} color="black" />
        }
        onSubmitEditing={createChat}
      />
      <Button title="Create new Chat" onPress={createChat} />
    </View>
  );
};
export default AddChat;

const styles = StyleSheet.create({
    container:{
        backgroundColor:"white",
        padding:30,
        height:"100%"
    }
});
