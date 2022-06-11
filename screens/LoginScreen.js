import { StyleSheet, Text, View, KeyboardAvoidingView } from "react-native";
import React, { useState, useEffect } from "react";
import { Button, Input, Image } from "react-native-elements";
import { StatusBar } from "expo-status-bar";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    const unsubscribe= onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        navigation.replace("Home");
      }
    });
    return unsubscribe;
  },[])
  const signIn = () => {};
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behaviour="padding"
    >
      <StatusBar style="light" />
      <Image
        source={{
          uri: "https://pnggrid.com/wp-content/uploads/2021/05/Signal-1024x1024.png",
        }}
        style={{ width: 200, height: 200 }}
      />
      <View style={styles.inputContainer}>
        <Input
          placeholder="Email"
          autoFocus
          type="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          secureTextEntry={true}
          type="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        
      </View>
      <Button containerStyle={styles.button} title="Login" onPress={signIn} />
        <Button
          containerStyle={styles.button}
          type="outline"
          title="Register"
          onPress={() => {navigation.navigate("Register")}}
        />
      <View style={{height:100}}/>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding:10,
  },
  inputContainer: {
    width:300,
  },
  button:{
    width:200,
    marginTop:10,
  }
});
