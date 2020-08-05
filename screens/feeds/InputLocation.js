import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { TouchableOpacity } from 'react-native-gesture-handler';
//npm install @react-native-community/geolocation

export default class App extends Component {

    render() {
      return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        query={{
          key: 'AIzaSyB9FOMICSBQTS3I8QYabTulbXu8YUqXDVs',
          language: 'en', 
          components: 'country:tw'
        }}
        onPress={(data = null) => {
          // 'details' is provided when fetchDetails = true
          global.eventloca = data.description;
        }}
        onFail={error => console.error(error)}
        
        styles={{
          textInputContainer: {
            backgroundColor: '#FAF7F0',
            borderTopWidth: 0,
            borderBottomWidth: 0,
          },
          textInput: {
            marginLeft: 0,
            marginRight: 0,
            height: 40,
            color: "#707070",
            fontSize: 14,
          },
          predefinedPlacesDescription: {
            color: '#f5c867',
          },
        }}
        currentLocation={true}
        currentLocationLabel='Restaurants nearby'
      />
    </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#FAF7F0',
    padding: 20,
  },
});
