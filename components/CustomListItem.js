import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ListItem, Avatar } from 'react-native-elements'
const CustomListItem = ({id, chatName, enterChat}) => {
  return (
    <ListItem key={id} bottomDivider>
        <Avatar rounded source={{
            uri:"https://source.unsplash.com/random/400x400"
        }}/>
        <ListItem.Content>
            <ListItem.Title style={{fontWeight:"800"}}>{chatName}</ListItem.Title>
            <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
              This is a test subtitle
            </ListItem.Subtitle>
        </ListItem.Content>
    </ListItem>
  )
}

export default CustomListItem

const styles = StyleSheet.create({})