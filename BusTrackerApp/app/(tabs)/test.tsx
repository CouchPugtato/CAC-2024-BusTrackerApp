import React from 'react';
import { StyleSheet, Text, View,FlatList,Alert} from 'react-native';
import { TextInput,Button,IconButton, } from 'react-native-paper';
import * as SQLite from 'expo-sqlite/legacy';

const db = SQLite.openDatabase('test.db');



class UsersScreen extends React.Component 
{   

    constructor(props:any) {
        super(props);
        this.state = {
          FlatListItems: [],
        };
        db.transaction(tx => {
          tx.executeSql('SELECT * FROM users', [], (tx, results) => {
            var temp = [];
            for (let i = 0; i < results.rows.length; ++i) {
              temp.push(results.rows.item(i));
            }
            this.setState({
              FlatListItems: temp,
            });
          });
        });
      }


    ListViewItemSeparator = () => {
        return (
          <View style={{ height: 0.2, width: '100%', backgroundColor: '#808080' }} />
        );
      };



    render()
    {
            return(
                <View style = {styles.container}>
                <FlatList
                  data={this.state.FlatListItems}
                  ItemSeparatorComponent={this.ListViewItemSeparator}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item }) => (

                    <View key={item.userid} style={{ backgroundColor: 'white', padding: 20 }}>
                      <Text>Id: {item.userid}</Text>
                      <Text>Name: {item.firstname }</Text>
                      <Text>UserName: {item.username }</Text>
                      <Text>Email: {item.email}</Text>
                      <Text>Password: {item.password}</Text>
                      <Button icon="person-add" mode="contained" style={styles.buton} onPress={() => this.props.navigation.navigate("DeleteUser",{"UserId":item.userid})}>  Delete User </Button>
                      <Button icon="person-add" mode="contained" style={styles.buton} onPress={() => this.props.navigation.navigate("EditUser",{"UserId":item.userid})}>  Edit User </Button>

                    </View>
                  )}
                />
              </View>
            );
    }

}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
    },
    textinput:{
      marginLeft:5,

      backgroundColor: 'transparent'
    },
    buton:{
      margin:10,
      marginBottom:10,
      backgroundColor: '#f05555'
    }  

  });

export default UsersScreen;
