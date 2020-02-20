import React from 'react';
import Loading from './Loading';
//import MapView from 'react-native-maps';
//import { StyleSheet, Text, View, Dimensions } from 'react-native';
//import { render } from 'react-dom';

export default class extends React.Component {
  state = {
    isLoading : true
  };

  render() {
    const {isLoading} = this.state;
    return isLoading ? <Loading /> : null;
  }
  
  /*
  return (
    <View style={styles.container}>
      <MapView style={styles.mapStyle} />
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
  */
}