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
import * as SQLite from 'expo-sqlite';
// import {createTables, connectToDatabase} from '../db/db';

import {
  enablePromise,
  openDatabase,
  SQLiteDatabase
} from "react-native-sqlite-storage"


export default async function signIn() {
  
  //idk wtf im doing
  let db = openDatabase( {name: 'userAccount.db', location: 'default'}
    , 
    () => {console.log('Database opened successfully');},
    error => {
      console.error("error opening database: ", error);
    }
  );

  


  // SQLite database functions #1
 
 
  useEffect(() => {
    createTable();
  }, []);

  const createTable = async () => {
    const query_create = `CREATE TABLE IF NOT EXISTS userAccount(
        id INTEGER PRIMARY KEY AUTOINCREMENT,name TEXT NOT NULL,
      password TEXT NOT NULL
    );`;
    try {
        (await db).executeSql(query_create);
      } catch (err) {
        console.log({err});
      }
    (await db).transaction(tx => {
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
      const query_insert = 'INSERT INTO userAccount (name, password) VALUES (?, ?)';
      const params = ["xyz", '123'];

      try {
      (await db).executeSql(query_insert, params);
      } catch (err) {
        console.log('err', err);
      }
      (await db).transaction(tx => {
        tx.executeSql(
          `INSERT INTO Users (username, password) VALUES (?, ?)`,
          ['exampleUser', 'securePassword']
        );
      });
    };

    const deleteData = async () => {
      const query_delete = 'DELETE FROM userAccount WHERE id = ?';
      const params = ['1']
    
      try {
        (await db).executeSql(query_delete, params);
      } catch (err) {
          console.log('err', err);
      }
    };

    createTable();
    insertData();


  // const db = await SQLite.openDatabaseAsync('userAccount.db');

  // // `execAsync()` is useful for bulk queries when you want to execute altogether.
  // // Please note that `execAsync()` does not escape parameters and may lead to SQL injection.
  // await db.execAsync(`
  // PRAGMA journal_mode = WAL;
  // CREATE TABLE IF NOT EXISTS test (id INTEGER PRIMARY KEY NOT NULL, value TEXT NOT NULL, intValue INTEGER);
  // INSERT INTO test (value, intValue) VALUES ('test1', 123);
  // INSERT INTO test (value, intValue) VALUES ('test2', 456);
  // INSERT INTO test (value, intValue) VALUES ('test3', 789);
  // `);
  
  // // `runAsync()` is useful when you want to execute some write operations.
  // const result = await db.runAsync('INSERT INTO test (value, intValue) VALUES (?, ?)', 'aaa', 100);
  // console.log(result.lastInsertRowId, result.changes);
  // await db.runAsync('UPDATE test SET intValue = ? WHERE value = ?', 999, 'aaa'); // Binding unnamed parameters from variadic arguments
  // await db.runAsync('UPDATE test SET intValue = ? WHERE value = ?', [999, 'aaa']); // Binding unnamed parameters from array
  // await db.runAsync('DELETE FROM test WHERE value = $value', { $value: 'aaa' }); // Binding named parameters from object
  
  // `getFirstAsync()` is useful when you want to get a single row from the database.
  // const firstRow = await db.getFirstAsync('SELECT * FROM test');
  // console.log(firstRow.id, firstRow.value, firstRow.intValue);
  
  // `getAllAsync()` is useful when you want to get all results as an array of objects.
  // const allRows = await db.getAllAsync('SELECT * FROM test');
  // for (const row of allRows) {
  //   console.log(row.id, row.value, row.intValue);
  // }
  
  // `getEachAsync()` is useful when you want to iterate SQLite query cursor.
  // for await (const row of db.getEachAsync('SELECT * FROM test')) {
  //   console.log(row.id, row.value, row.intValue);
  // }
  

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


