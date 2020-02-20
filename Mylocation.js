import React from 'react';
//import PropTypes from 'prop-types';
import MapView from 'react-native-maps';
import { StyleSheet, View, Text, Dimensinos, Dimensions } from 'react-native';

export default function MyLocation({city}) {
    return (
        <View style={styles.container}>
            <MapView style={styles.mapStyle} />
            <View style={styles.containerBelow}>
                <Text style={styles.textLocation}>나는 지금 {city}에서 서성이고 있어요</Text>
                </View>
        </View>
    )};
    /*
    MyLocation.propTypes = {
        city:PropTypes.string.isRequired,
    };
    */
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
        flex: 9,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    textLocation: {
        color: "white",
        fontSize: 15,
        fontWeight: "500",
    }
})

//지도위에 내 위치 표시할것을 찾아볼껏
