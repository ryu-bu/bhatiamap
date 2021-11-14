//James Wasson

import React, { Component, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';


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

function move(val){
    const { Pool, Client } = require("pg");

    const pool = new Pool({
    name: "temp1",
    email: "temp@temp",
    genre: "temp",
    database: "test",
    password: "1",
    port: "1"
    });

    pool.query("UPDATE musicians SET genre = " + val + " where email = " )        
}

export default function profileCreate(navigation) {
    //const [username, setUsername] = useState(false);
    //const [password, setPassword] = useState(false);
    const [selectedValue, setSelectedValue] = useState("Rock");
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
            <Button title="Confirm" color="gray" onPress={move(picker.value)} />
        </View>
        
      </View>

      
    );
};