import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect, useEffect, useState } from "react";
import CustomListItem from "../components/CustomListItem";
import { Avatar } from "react-native-elements";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";
import { doc, onSnapshot, collection } from "firebase/firestore";
import { db } from "../firebase";
const Home = ({ navigation }) => {
  const [chats, setChats] = useState([]);
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "chats"), (snapshot) => {
      const data=snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      console.log(data);
      setChats(data);
    });
    console.log(chats)
    return unsubscribe;
  }, [navigation]);
  const signout = () => {
    signOut(auth).then(() => {
      navigation.replace("Login");
    });
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Signal",
      headerStyle: {
        backgroundColor: "white",
      },
      headerTitleStyle: { color: "black" },
      headerTintColor: "black",
      headerLeft: () => (
        <View style={{ marginLeft: 20 }}>
          <TouchableOpacity onPress={signout}>
            <Avatar
              rounded
              source={{ uri: "https://source.unsplash.com/random/400x400" }}
            />
          </TouchableOpacity>
        </View>
      ),
      headerRight: () => {
        return (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: 80,
              marginRight: 20,
            }}
          >
            <TouchableOpacity>
              <AntDesign name="camerao" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("AddChat")}>
              <SimpleLineIcons name="pencil" size={24} color="black" />
            </TouchableOpacity>
          </View>
        );
      },
    });
    return () => {};
  }, []);
  return (
    <SafeAreaView>
      <ScrollView>
        {chats.map((chat)=>{
          return <CustomListItem key={chat.id} chatName={chat.chatName} id={chat.id}/>
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
