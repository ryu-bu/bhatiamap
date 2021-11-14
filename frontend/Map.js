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

import MapView, { Overlay } from 'react-native-maps';
import { Marker, PROVIDER_GOOGLE } from 'react-native-maps'


const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: 850,
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    backbtn: {
        position: 'absolute', top: 60, left: 10, right: 0, bottom: 0,
        color: "transparent",
        width: "30%",
        borderWidth: 1,
        padding: 10,
        height: 60,
    },
    Coord1: {
        position: 'absolute', top: 200, left: 20, right: 0, bottom: 0,
        color: "transparent",
        width: "30%",
        borderWidth: 1,
        margin: 25,
        borderRadius: 50,
        // height: 60,
    },

});



//const [region, setRegion] = useState(false);

export default function map({ navigation }) {
    /*constructor(props) {
        this.state = {
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }
    }
    render ()
    */
    const [InitialRegion, setRegion] = useState({
        latitude: 42.3505,
        longitude: -71.1054,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    })

    return (
        <View style={styles.container}>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                region={InitialRegion}

            // onRegionChange={this.onRegionChange}
            >
                <Marker draggable
                    coordinate={InitialRegion}

                // onChangeText={food => setQuery(food)} //onChangeText is how you store user input
                // onDragEnd={(e) => this.setState({ x: e.nativeEvent.coordinate })}
                />
            </MapView >
            <View style={styles.backbtn}>
                <Button color="black"
                    title="<--"
                    onPress={() => navigation.navigate('Login Screen')}
                />
            </View>








        </View>
    )

};



/*
<Overlay target={target.current} show={show} placement="top">

                </Overlay>
*/