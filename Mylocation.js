import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View, Text, Dimensinos, Dimensions } from 'react-native';

export default function MyLocation() {
    return (
        <View style={styles.container}>
            <MapView style={styles.mapStyle} />
            <View style={styles.containerBelow}>
                <Text style={styles.textLocation}>나는지금 어디?</Text>
                </View>
        </View>
    )};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    containerBelow: {
        flex: 1,
        alignItems:"center",
        justifyContent: "center",
        backgroundColor: "#7978C3",
    },

    mapStyle: {
        flex: 5,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    textLocation: {
        color: "white",
    }
})