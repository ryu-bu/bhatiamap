import React, { Component, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import axios from 'axios';


import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    TextInput,
    Button,
    Image,
    ImageBackground,
    Picker,
} from 'react-native';
import { stringLiteral } from '@babel/types';
import { Ionicons } from '@expo/vector-icons';
import { restApiConfig } from './config';



const styles = StyleSheet.create({
    inputView: {
        flex: 1,
    paddingTop: 40,
    alignItems: "center"
    },

    buttonView: {
        height: 50,
        width: "70%",
        borderColor: 'black',
        borderRadius: 30,
        backgroundColor: "white",
        alignSelf: 'center',
        marginTop: 200,
        justifyContent: 'center'
    },

});

// async function move({val, email, name, navigation}){
//   const res = await axios.put(restApiConfig.MUSICIAN_ENDPOINT, { 'email': email, 'field': 'genre', 'key': val });
// //   console.log(val)
// //   console.log(name)
//   navigation.navigate("Gig Addition Screen", {
//     email: email,
//     genre: val
// })
// }


export default function profileCreate({route, navigation}) {
    //const [username, setUsername] = useState(false);
    //const [password, setPassword] = useState(false);
    const {email, name} = route.params;
    const [selectedValue, setSelectedValue] = useState("Rock");

    const move = async () => {
      console.log("Prof Create movement");
      console.log(email)
      navigation.navigate("Gig Addition Screen", {
        email: email,
        genre: selectedValue
    });
      console.log("What");
      try {
          axios.put(restApiConfig.MUSICIAN_ENDPOINT, { 'email': "ryu74@bu.edu", 'field': 'genre', 'key': "rock" })
          .then((res) => {
              console.log(res.data);
              navigation.navigate("Gig Addition Screen", {
                  email: "email",
                  genre: "selectedValue"
              });
          })
          .catch(err => {
              console.log(err)
          });
      } catch (error) {
          console.log("Error with genre creation", error);
      }
  };


    return (
      <View style={styles.container}>
        <Picker
          selectedValue={selectedValue}
          style={{ height: 50, width: 150 }}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="Rock" value="rock" />
          <Picker.Item label="Jazz" value="jazz" />
          <Picker.Item label="Emo" value="emo" />
          <Picker.Item label="Pop" value="pop" />
        </Picker>
        
        <View style={styles.buttonView}>
            <Button title="Confirm" color="gray" onPress={move} />
        </View>
        
      </View>
    );
};