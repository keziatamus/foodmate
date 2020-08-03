import React, { useState, useEffect, useRef } from 'react';
import * as Location from 'expo-location';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, Platform } from 'react-native';
import { SearchBar } from 'react-native-elements';

export default class App extends React.Component {
  state = {
    search: '',
  };

  updateSearch = (search) => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <View style={styles.container}>
          <SearchBar
            lightTheme={true}
            round={true}
            platform={Platform.OS}
            placeholder="Search"
            onChangeText={this.updateSearch}
            value={search}
      />
      </View>
    );
  }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
})
