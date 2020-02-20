import React from 'react';
import Loading from './Loading';
import * as Location from 'expo-location';
import { Alert } from 'react-native';
import MyLocation from './Mylocation';

export default class extends React.Component {
  state = {
    isLoading : true
  };

  //시티정보 가져오기
  getCity = async(latitude, longitude) => {

    const place = await Location.reverseGeocodeAsync({latitude, longitude});
    const city = place[0].city;
    
    //시티정보 콘솔 확인
    console.log(city);
  
    this.setState({
      isLoading: false,
      city
    })

  }

  //경도, 위도 위치 정보 가져오기
  getLocation = async() => {
    try{
      //로케이션 기기 퍼미션
      await Location.requestPermissionsAsync();

      //위치정보 가져오기
      const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync();
    
      //getCity실행
      this.getCity(latitude, longitude);
      
      //위치정보 콘솔 확인
      console.log(latitude, longitude);
              
    } catch(error) {
      //에러메세지
      Alert.alert("웁스~에러났어요")
    }
  }

  componentDidMount() {
    this.getLocation();
  }

  render() {
    const {isLoading, city} = this.state;
    return isLoading ? <Loading /> : <MyLocation city={city}/>;
  }
  
  }