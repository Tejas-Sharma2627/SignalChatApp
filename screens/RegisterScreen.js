import { StyleSheet, View, KeyboardAvoidingView } from "react-native";
import React, { useState, useLayoutEffect } from "react";
import { Button, Text, Input } from "react-native-elements";
import { StatusBar } from "expo-status-bar";
import { auth } from "../firebase";
import {createUserWithEmailAndPassword, updateProfile} from 'firebase/auth'
const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const register = () => {
      createUserWithEmailAndPassword(auth, email, password)
      .then((authUser) => {
          updateProfile({
              displayName: name,
              photoURL: imageUrl || "https://source.unsplash.com/random/400x400"
          })
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: "Back",
    });
  }, [navigation]);
  return (
    <KeyboardAvoidingView style={styles.container}>
      <StatusBar style="light" />
      <Text h3 style={{ marginBottom: 50 }}>
        Create a Signal Account
      </Text>
      <View style={styles.inputContainer}>
        <Input
          type="text"
          placeholder="Full Name"
          value={name}
          autofocus
          onChangeText={(text) => setName(text)}
        />
        <Input
          type="email"
          placeholder="Email"
          value={email}
          autofocus
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          type="password"
          secureTextEntry
          placeholder="Password"
          value={password}
          autofocus
          onChangeText={(text) => setPassword(text)}
        />
        <Input
          type="text"
          placeholder="Profile Picture URL"
          value={imageUrl}
          autofocus
          onChangeText={(text) => setImageUrl(text)}
          onSubmitEditing={register}
        />
      </View>
      <Button
        style={styles.button}
        onPress={register}
        raised
        title="Register"
      />
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  button: {
    width: 200,
    marginTop: 10,
  },
  inputContainer: {
    width: 300,
  },
});
