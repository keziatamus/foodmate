import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export default class App extends Component {
    render() {
      return (
    <View style={styles.container}>
        <Text style={styles.title}> (title name) </Text>
    <View style={styles.square}>
        <MaterialCommunityIcons name="calendar-month" size={20} color="black" />
    </View>

    <View style={styles.square}>
        <MaterialCommunityIcons name="clock-outline" size={20} color="black" />  
    </View>

    <View style={styles.square}>
        <MaterialCommunityIcons name="account-circle-outline" size={20} color="black" />
    </View>

    <View style={styles.square}>
        <MaterialCommunityIcons name="map-marker" size={20} color="black" />
    </View>

    <View style={styles.square}>
        <MaterialCommunityIcons name="note-outline" size={20} color="black" />
    </View>
    </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#FAF7F0',
    padding: 20,
  },
  square: {
    height: 50,
    backgroundColor: 'white',
    borderRadius: 0,
    justifyContent: 'center',
    marginBottom: 1,
    paddingLeft: 20,
},
  eventDetail: {
    height: 20,
    paddingLeft: 30,
  },
  title: {
    fontSize: 18,
    color: "black",
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 20
  },
});
