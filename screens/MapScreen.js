import React, { useState, useEffect, useRef } from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Dimensions, View } from 'react-native';
import * as Location from 'expo-location';

export default function MapScreen(props) {
    const [userPosition, setUserPosition] = useState(null);
    const mapRef = useRef(null);

    useEffect(() => {
        getUserPosition();

        // props.navigation.navigate('Create');
    }, []);

    useEffect(() => {
        if (userPosition && mapRef.current) {
            setTimeout(() => {
                mapRef.current.animateToRegion({
                    latitude: userPosition.latitude,
                    longitude: userPosition.longitude,
                    latitudeDelta: 0.00422,
                    longitudeDelta: 0.000421,
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

    return (
            <MapView
                style={styles.mapStyle}
                provider="google"
                ref={mapRef}
                showsUserLocation={true}
                showsMyLocationButton={true}
            />
    )
}

const styles = StyleSheet.create({
    mapStyle: {
        width: Dimensions.get('window').width,
        height: '100%',
        borderRadius: 0,
        //height: Dimensions.get('window').height,
    },
})
