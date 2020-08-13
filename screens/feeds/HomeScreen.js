import React, { useState, useEffect, useRef } from 'react';
import * as Location from 'expo-location';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, Platform, ScrollView } from 'react-native';
import { SearchBar } from 'react-native-elements';
import TopCategories from './TopCategories';
import Events from './Events';

export default function HomeScreen(props) {
  const [search, setSearch] = useState('');
  const [userPosition, setUserPosition] = useState(null);
  const mapRef = useRef(null);

  useEffect(() => {
    getUserPosition();
  }, []);

  useEffect(() => {
    if (userPosition && mapRef.current) {
      setTimeout(() => {
        mapRef.current.animateToRegion({
          latitude: userPosition.latitude,
          longitude: userPosition.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }, 800);
      }, 100);
    }
  }, [userPosition, mapRef]);

  async function getUserPosition() {
    try {
      await Location.requestPermissionsAsync();
      const position = await Location.getCurrentPositionAsync({});

      console.log({ position })
      setUserPosition({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      });
    }
    catch (e) {
      throw e;
    }
  }

  function updateSearch(value) {
    setSearch(value);
  }
  return (
    <View style={styles.container}>
      <ScrollView>
      <View>
        <SearchBar
          lightTheme={true}
          searchIcon={{paddingLeft:5}}
          inputContainerStyle={{backgroundColor: 'white', height:40}}
          containerStyle={{ backgroundColor: '#f7f7f7', paddingLeft:20, paddingRight:20}}
          inputStyle={{fontSize:15}}
          //platform={Platform.OS}
          placeholder="Search"
          onChangeText={updateSearch}
          value={search}
          
        />
      </View>

      <Text style={styles.titleText}>Current Location</Text>
      <View style={styles.mapViewContainer}>
        <MapView
          style={styles.mapStyle}
          provider="google"
          ref={mapRef}
          showsUserLocation={true}
          showsMyLocationButton={true}
        />
      </View>
      <View>
        <ScrollView
          scrollEventThrottle={16}>
            <View styles={{flex:1, paddingTop:20}}>
              <Text style={styles.titleText}>
                Top Categories
              </Text>

              <View style={{height:210}}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicato={false}>
                  <TopCategories 
                  imageUri={require('../../assets/american.jpg')}
                  name="American"
                  total="(14)"
                  menu="Hamburger, Fries, Clam Chowder, Deep-Dish Pizza, and more."/> 
                  <TopCategories 
                  imageUri={require('../../assets/italian.jpg')}
                  name="Italian"
                  total="(20)"
                  menu="Spaghetti, Lasagna, Risotto, Pizza, Ossobuco, Gelato, and more."/>
                   <TopCategories 
                  imageUri={require('../../assets/french.jpg')}
                  name="French"
                  total="(4)"
                  menu="French toast, Ratatouille, Crêpes, Soufflé, Cassoulet, and more."/>
                  <TopCategories 
                  imageUri={require('../../assets/mexican.jpg')}
                  name="Mexican"
                  total="(1)"
                  menu="Burritos, Guacamole, Enchiladas, Quesadillas, Salsa, and more."/>
                  <TopCategories 
                  imageUri={require('../../assets/korean.jpg')}
                  name="Korean"
                  total="(7)"
                  menu="Bulgogi, Bibimbap, Ddukbokki, Kimchi, Japchae, and more."/>
                  <TopCategories 
                  imageUri={require('../../assets/japanese.jpg')}
                  total="(9)"
                  name="Japanese"
                  menu="Sushi, Sashimi, Tempura, Soba, Udon, Onigri, Yakitori, and more."/>
                  <TopCategories 
                  imageUri={require('../../assets/chinese.jpg')}
                  name="Chinese"
                  total="(2)"
                  menu="Hotpot, Sichuan Pork, Sweet and Sour Pork, Fried Noodle, and more."/>
                  <TopCategories 
                  imageUri={require('../../assets/hongkong.jpg')}
                  name="Hong Kong"
                  total="(1)"
                  menu="Wontons, Roast Goose, Fish Balls, Har Gow, Chickens' Feet, and more."/>
                  <TopCategories 
                  imageUri={require('../../assets/taiwanese.jpg')}
                  name="Taiwanese"
                  total="(3)"
                  menu="Beef Noodles, Dumplings, Minced Pork Rice, Stinky Tofu, and more."/>
                  <TopCategories 
                  imageUri={require('../../assets/thai.jpg')}
                  name="Thai"
                  total="(6)"
                  menu="Tom Yum Goong, Som Tum, Pad Thai, Khao Pad, and more."/>
                  <TopCategories 
                  imageUri={require('../../assets/indian.jpg')}
                  name="Indian"
                  total="(1)"
                  menu="Biryani, Butter Chicken, Tandoori Chicken, aFlatbread, and more."/>
                  <TopCategories 
                  imageUri={require('../../assets/indonesian.jpg')}
                  name="Indonesian"
                  total="(1)"
                  menu="Satay, Fried Rice, Beef Rendang, Sop Buntut, Soto Ayam, and more."/>
                  </ScrollView>
              </View>
              <View styles={{flex:1, paddingTop:20}}>
              <Text style={styles.titleText}>
                Events
              </Text>
                <Events
                imageUri={require('../../assets/italian/1.jpg')}
                title="I LOVE PASTA"
                member="4"
                date="Friday, August 7"
                location="里吉拿義大利麵 Regina Pasta"
                />
              </View>
            </View>
          </ScrollView>
      </View>
      </ScrollView>
    </View>
  ) 
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  titleText:{
    fontSize:17,
    color:"#454545",
    fontWeight: '700',
    textAlign:'left',
    marginTop:20,
    paddingHorizontal: 20
  },
  mapStyle: {
    width: '90%',
    height: 180,
    borderRadius: 10
    //width: Dimensions.get('window').width,
    //height: Dimensions.get('window').height,
  },
  mapViewContainer: {
    width: '100%',
    height: 190,
    borderRadius: 10,
    marginTop: 10,
    alignItems: 'center',
    overflow: 'hidden'
  }
})
