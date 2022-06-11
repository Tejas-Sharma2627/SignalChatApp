import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native'
import React, {useLayoutEffect} from 'react'
import CustomListItem from '../components/CustomListItem'

const Home = ({navigation}) => {
    useLayoutEffect(() => {
    navigation.setOptions({
        title:"Signal",
        headerStyle:{
            backgroundColor:"white",
        },
        headerTitleStyle:{color:"black"},
        headerTintColor:"black",
        
    });
      return () => {
      };
    }, [])
  return (
    <SafeAreaView>
      <ScrollView>
          <CustomListItem/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})