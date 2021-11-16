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
  
async function gig_update({gigName, email, genre, longitude, latitude, time}){
    const res = await axios.put(restApiConfig.GIG_ENDPOINT, {
      'name': gigName, 'email': email, 'genre': genre, 'longitude':longitude, 'latitude':latitude, 'time': time });
    // console.log(val)
    // console.log(name)
  //   navigation.navigate("Gig Addition Screen", {
  //     email: email,
  //     genre: val
  // })
  }

export default function profileCreate({route, navigation}) {
    
    const {email, genre} = route.params;
    console.log(genre);
    //onPress={gig_update(gigName, email, genre, longitude, latitude, time)}

    const [gigName, onChangeName] = React.useState(null);
    const [longitude, onChangelongitude] = React.useState(null);
    const [latitude, onChangelatitude] = React.useState(null);
    const [time, onChangetime] = React.useState(null);
    return (
    <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeName}
          value={gigName}
          placeholder= "Name of Gig"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangelongitude}
          value={longitude}
          placeholder= "Longitude"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangelatitude}
          value={latitude}
          placeholder= "Latitude"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangetime}
          value={time}
          placeholder= "Time"
        />
        <Button title="Login" color="red"/>
        
      </SafeAreaView>
  );
};