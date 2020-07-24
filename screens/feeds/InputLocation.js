import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const App = () => {
  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        query={{
          key: 'AIzaSyB9FOMICSBQTS3I8QYabTulbXu8YUqXDVs',
          language: 'en', 
        }}
        onPress={(data, details = null) => console.log(data)}
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
            height: 38,
            color: "#707070",
            fontSize: 16,
          },
          predefinedPlacesDescription: {
            color: '#f5c867',
          },
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#FAF7F0',
    padding: 8,
  },
});

export default App;
