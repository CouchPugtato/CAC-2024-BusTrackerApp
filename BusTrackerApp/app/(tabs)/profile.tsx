import { StyleSheet, Text, View, TextInput, Button} from 'react-native'
import React from 'react';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
const profile = () => {
  return (
    <View style  = {styles.body}>
      <ThemedView style={styles.titleContainer } >
        <ThemedText type="title" style = {styles.profile}>Profile</ThemedText>
      </ThemedView>
      <View style = {styles.button1}>
      <Button 
            title = "Manage Subscribed Routes"
            color='black'
            />
      </View>
      <View style = {styles.button2}>
        <Button
          title = "Manage Local Bus Stops"
          color = "black"
        />
      </View>

      <View style = {styles.signOut}>
        <Button
          title = "Sign Out"
          color = "black"
        />
      </View>

     
    </View>
  )
}

export default profile

const styles = StyleSheet.create({
    
    titleContainer: {
      flexDirection: 'row',
      gap: 16,
      marginTop: 100,
      justifyContent: "center", 
      backgroundColor: "white",
    },
    body: {
      
      backgroundColor: "white",
      flex: 1,
    },
    profile: {
        color: "black"
    },
   button1: {
        backgroundColor: "#32CD32",
        flex:1,
        position: "absolute",
        bottom: 500,
        right: 100
   },
   button2: {
      backgroundColor: "#32CD32",
      flex:1,
      position: "absolute",
      bottom: 350,
      right: 110
   },
   signOut: {
    backgroundColor: "#FF474C",
    flex: 1,
    position: "absolute",
    bottom: 250,
    right: 175 
   }
  });