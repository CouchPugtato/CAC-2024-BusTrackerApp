import React from 'react';
import {useCallback, useEffect} from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, View , Text, TextInput, ViewBase, Button} from 'react-native';
import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
// import {openDatabase, SQLiteDatabase, enablePromise} from 'react-native-sqlite-storage';
// import * as SQLite from 'expo-sqlite';
import {createTables, connectToDatabase} from '../db/db';

import {
  enablePromise,
  openDatabase,
  SQLiteDatabase
} from "react-native-sqlite-storage"


export default function signIn() {
  let db = openDatabase( {name: 'userAccount.db'});



  // SQLite database functions #1
 
 
  useEffect(() => {
    createTable();
  }, []);

  // const connectToDatabase = async () => {
  //   openDatabase(
  //     { name: "userAccount.db", location: "default" },
  //     () => {},
  //     (error) => {
  //       console.error(error)
  //       throw Error("Could not connect to database")
  //     }
  //   )
  // }

  const createTable = async () => {
    // const query_create = `CREATE TABLE IF NOT EXISTS userAccount(
    //     id INTEGER PRIMARY KEY AUTOINCREMENT,name TEXT NOT NULL,
    //   password TEXT NOT NULL
    // );`;
    // try {
    //     db.executeSql(query_create);
    //   } catch (err) {
    //     console.log({err});
    //   }
    db.transaction(tx => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS Users (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          username TEXT NOT NULL,
          password TEXT NOT NULL
        );`
      );
    });
    };

    const insertData = async () => {
      // const query_insert = 'INSERT INTO userAccount (name, password) VALUES (?, ?)';
      // const params = ["xyz", '123'];

      // try {
      // (await db).executeSql(query_insert, params);
      // } catch (err) {
      //   console.log('err', err);
      // }
      db.transaction(tx => {
        tx.executeSql(
          `INSERT INTO Users (username, password) VALUES (?, ?)`,
          ['exampleUser', 'securePassword']
        );
      });
    };

    // const deleteData = async () => {
    //   const query_delete = 'DELETE FROM userAccount WHERE id = ?';
    //   const params = ['1']
    
    //   try {
    //     (await db).executeSql(query_delete, params);
    //   } catch (err) {
    //       console.log('err', err);
    //   }
    // };
    // createTable();
    // insertData();
    connectToDatabase();
    createTables(db);
  

  //display sign in page
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
        color = "gray"
        // containerStyle = {{
        //   width: 75,
        //   marginLeft: 200,
        //   marginTop: 300
        // }}
        />


      <ThemedText style = {styles.text2}>If you do not have an account create one here </ThemedText>
     
    </View>
  );
}



//CSS styling
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


