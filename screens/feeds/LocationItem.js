import React, { PureComponent } from 'react';
import { Text, StyleSheet, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

class LocationItem extends PureComponent {
    _handlePress = async () => {
        const res = await this.props.fetchDetails(thiss.props.place_id)
        console.log('result',res)
        Alert.alert(JSON.stringify(res))
    }
    render() {
        return (
        <TouchableOpacity style={StyleSheet.root} onPress={this._handlePress} >
            <Text> {this.props.description} </Text>
        </TouchableOpacity>
        );
    }
}

const styles=StyleSheet.create({
    root: {
        height: 40,
        borderBottomWidth: StyleSheet.hairlineWidth,
        justifyContent: 'center'
    }
})

export default LocationItem;