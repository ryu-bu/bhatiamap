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
} from 'react-native';
import { stringLiteral } from '@babel/types';
import { Ionicons } from '@expo/vector-icons';



const styles = StyleSheet.create({
    inputView: {
        height: 50,
        width: "70%",
        borderColor: 'black',
        borderRadius: 30,
        backgroundColor: "white",
        alignSelf: 'center',
        marginTop: 50,
        justifyContent: 'center'
    },

});

export default function Map(navigation) {
    //const [username, setUsername] = useState(false);
    //const [password, setPassword] = useState(false);

    return (
        <View>
            <View style={styles.inputView}>
                <Button title="Password?" color="gray" />
            </View>
        </View>
    )
};