
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, View , Text, TextInput} from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';


const signIn = () => {
    return (
        <View style  = {styles.body}>
          <ThemedView style={styles.titleContainer } >
            <ThemedText type="title">Sign in</ThemedText>
          </ThemedView>
          <ThemedText>Please enter in your username and password below: </ThemedText>
          <TextInput style = {styles.username}>Username</TextInput>
          <TextInput style = {styles.password}>Password</TextInput>
        
         
        </View>
      );
}

export default signIn




const styles = StyleSheet.create({
    headerImage: {
      color: '#808080',
      bottom: -90,
      left: -35,
      position: 'absolute',
    },
    titleContainer: {
      flexDirection: 'row',
      gap: 16,
      marginTop: 100,
      justifyContent: "center", 
      backgroundColor: "#29A829",
    },
    body: {
      
      backgroundColor: "#29A829",
    },
    username: {
        flexDirection: 'row',
        justifyContent: "center",
        marginTop: 50,
        backgroundColor: "white"
    },
    password: {
      flexDirection: 'row',
      justifyContent: "center",
      backgroundColor: "white",
      marginTop: 50,
    }
  });
  