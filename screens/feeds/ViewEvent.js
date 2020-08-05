import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const ICON_COLOR = '#FBAF02';
const ICON_SIZE = 24;
const FONT_SIZE = 14;
const TITLE_SIZE = 16;

const date = () => (
    <View style={styles.iconStyle}>
    <MaterialCommunityIcons  name="calendar-month" size={ICON_SIZE} color={ICON_COLOR} />
    <View style={styles.alignBox}>
        <Text style={styles.eventTitle}>Date</Text>
        <Text style={styles.eventDetail}>Friday, August 7</Text>
    </View>
  </View>
)

const time = () => (
    <View style={styles.iconStyle}>
    <MaterialCommunityIcons name="clock-outline" size={ICON_SIZE} color={ICON_COLOR} />  
    <View style={styles.alignBox}>
        <Text style={styles.eventTitle}>Time</Text>
        <Text style={styles.eventDetail}>1.30 PM</Text>
    </View>
  </View>
)

const member = () => (
    <View style={styles.iconStyle}>
    <MaterialCommunityIcons name="account-circle-outline" size={ICON_SIZE} color={ICON_COLOR} />
    <View style={styles.alignBox}>
        <Text style={styles.eventTitle}>Member</Text>
        <Text style={styles.eventDetail}>4 members</Text>
    </View>
  </View>
)

const location = () => (
    <View style={styles.iconStyle}>
    <MaterialCommunityIcons name="map-marker" size={ICON_SIZE} color={ICON_COLOR} />
    <View style={styles.alignBox}>
        <Text style={styles.eventTitle}>Restaurant</Text>
        <Text style={styles.eventDetail}>Regina Pasta</Text>
    </View>
  </View>
)

const description = () => (
    <View style={styles.iconStyle}>
    <MaterialCommunityIcons name="note-outline" size={ICON_SIZE} color={ICON_COLOR} />
    <View style={styles.alignBox}>
        <Text style={styles.eventTitle}>Description</Text>
        <Text style={styles.eventDesc}>For my fellow pasta lover in Ming Chuan University. Taiwanese and foreigners are all welcome to join!</Text>
    </View>
  </View>
)

export default class App extends Component {
    render() {
      return (
    <View style={styles.container}>
        <Text style={styles.title}> I LOVE PASTA! </Text>

        <View style={styles.iconContainer}>
            {date()}
            {time()}
            {member()}
            {location()}
            {description()} 
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
  alignBox:{
    justifyContent: 'flex-start',
  },
  eventTitle: {
    fontSize: TITLE_SIZE,
    fontWeight: 'bold',
    paddingLeft: 10,
    marginBottom: 5,
  },
  eventDetail: {
    fontSize: FONT_SIZE,
    paddingLeft: 10,
  },
  eventDesc: {
    fontSize: FONT_SIZE,
    paddingLeft: 10,
    paddingRight: 20,
  },
  title: {
    fontSize: 20,
    color: "black",
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 20
  },
  iconStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 20,
  },
  iconContainer: {
    borderRadius: 10,
    backgroundColor: 'white',
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
});
