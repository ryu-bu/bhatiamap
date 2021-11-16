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
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    buttonView: {
          height: 50,
          width: "70%",
          borderColor: 'black',
          borderRadius: 30,
          backgroundColor: "red",
          alignSelf: 'center',
          marginTop: 200,
          justifyContent: 'center'
      },
  });
  
async function gig_update({text1, email, genre, text2, text3, text4}){
    const res = await axios.put(restApiConfig.GIG_ENDPOINT, {
      'name': text1, 'email': email, 'genre': genre, 'longitude':text2, 'latitude':text3, 'time': text4 });
    // console.log(val)
    // console.log(name)
  //   navigation.navigate("Gig Addition Screen", {
  //     email: email,
  //     genre: val
  // })
  }

export default async function profileCreate({route, navigation}) {
    
    const {email, genre} = route.params;

    const [text1, onChangeText] = React.useState(null);
    const [text2, onChangeText2] = React.useState(null);
    const [text3, onChangeText3] = React.useState(null);
    const [text4, onChangeText4] = React.useState(null);
    return (
    <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text1}
          placeholder= "Name of Gig"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeText2}
          value={text2}
          placeholder= "Longitude"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeText3}
          value={text3}
          placeholder= "Latitude"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeText4}
          value={text4}
          placeholder= "Time"
        />
        <Button title="Login" color="red" onPress={gig_update(text1, email, genre, text2, text3, text4)}/>
      </SafeAreaView>
  );
};