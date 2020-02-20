import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { LinearGradient} from 'expo-linear-gradient';
import * as Font from 'expo-font';

const fetchFonts =() => {
    return Font.loadAsync({
        'Pacifico-regular': require('./assets/font/Pacifico-Regular.ttf')
    });
};

export default function Loading() {

    return (
    //<View style={styles.container}>
      <LinearGradient
        colors={['#3494e6', '#ec6ead']}
        style={styles.container}
      >
        <View style={styles.container1}>
            <Image source={require('./assets/img/logo.png')} />
        </View>
        <View style={styles.container2}>
            <Text style={styles.title}>난 혼자 살아도</Text>
            <Text style={styles.subTitle}>난 혼자서 먹진 않아!</Text>       
        </View>   
      </LinearGradient>
    //</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  container1: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center"
  },
  container2: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 30,
    paddingVertical: 200
  },
  title: {
    fontSize: 45,
    fontWeight: "bold",
    marginBottom: 2,
    color: "white"
  },
  subTitle: {
    fontSize: 35,
    fontWeight: "600",
    color: "white"
  },
  logoStyle: {
    width: "300px",
    height: "50px"
  },
});
