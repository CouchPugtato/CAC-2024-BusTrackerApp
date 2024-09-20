
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, View , Text, TextInput, ViewBase} from 'react-native';
import {Button} from '@rneui/themed';
import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';


const signIn = () => {
    return (
        <View style  = {styles.body}>
          <ThemedView style={styles.titleContainer } >
            <ThemedText type="title" style = {styles.title}>Login</ThemedText>
          </ThemedView>
          <ThemedText style = {styles.text}>Please sign in to continue </ThemedText>
          <TextInput style = {styles.username}>Username</TextInput>
          <TextInput style = {styles.password}>Password</TextInput>
          <Button 
            title = "Login"
            type = "solid"
            size = "sm"
            color = "gray"
            containerStyle = {{
              width: 75,
              marginLeft: 200,
              marginTop: 300
            }}
            />


          <ThemedText style = {styles.text2}>If you do not have an account create one here </ThemedText>
         
        </View>
      );
}

export default signIn




const styles = StyleSheet.create({
    headerImage: {
      color: 'black',
      bottom: -90,
      left: -35,
      position: 'absolute',
    },
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
    username: {
        flexDirection: 'row',
        backgroundColor: "white",
        color: "black",
        position: "absolute",
        left: 35,
        top: 270, 

    },
    password: {
      flexDirection: 'row',
      color: "black",
      backgroundColor: "white",
      position: "absolute",
      left: 35,
      top: 330, 
    },
    title: {
      color: "black",
      position: "absolute",
      left: 25,
      top: 100,

    },
    text: {
      color: "black",
      position: "absolute",
      left: 25,
      top: 240,
    },
    text2: {
      color: "black",
      position: "absolute",
      left: 40,
      bottom: 50
    }
  });
  