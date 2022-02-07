//James Wasson

import React, { Component, useEffect, useState } from 'react';
import { View } from 'react-native';



const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: "white",
        justifyContent: 'center'
    },
    header: {
        fontSize: 10,
        color: "gray",
        alignSelf: 'center',
    },
    addressInput: {
        height: 60,
        fontSize: 20,
        width: "70%",
        color: "black",
        padding: 20,
        borderWidth: 1,
        borderRadius: 25,
        alignSelf: 'center',
    },
    button1: {
        flexDirection: "row",
        height: 50,
        width: "80%",
        color: "white",
        backgroundColor: "deepskyblue",
        borderRadius: 25,
        paddingRight: 0,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
    },
});


export default function SearchScreen({ navigation }) {
    const [query, setQuery] = useState(false);

    return (
        <View style={styles.container}>

            <Text style={styles.header}> Enter name of city or town to find venues in that area</Text>

            <TextInput
                style={styles.inputText2}
                editable
                placeholder="ie. Boston"
                placeholderTextColor="gray"
                maxLength={15}
                onChangeText={city => setQuery(city)}
            />


            <View style={styles.button1}>
                <Button title="Search" color="white"
                    onPress={() => navigation.navigate('Map Screen')}
                />
            </View>
        </View>

    )

}


