import React, { Component} from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { TouchableOpacity } from 'react-native-gesture-handler';

class Events extends Component{
    render(){
        return(
            <View style={{width:'90%', height:300, marginLeft:20}}>
                    <View style={{flex:2}}>
                      <Image 
                      source={this.props.imageUri}  
                      style={{flex:1, width:null, height:null, resizeMode:'cover', borderRadius:10, marginVertical:10}}/>

                    </View>
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                      <Text style={{fontSize:16, fontWeight:'600'}}>{this.props.title}</Text>
                      <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
                        <MaterialCommunityIcons name="account" size={15} color={'black'} />
                        <Text style={{fontSize:13, fontWeight:'300'}}>{this.props.member}</Text>
                      </View>
                      
                    </View>
                    <View style={{flex:1, paddingTop:5}}>
                      <Text style={{fontSize:13, fontWeight:'300'}}>{this.props.date}</Text>
                      <Text style={{fontSize:14, fontWeight:'300'}}>{this.props.location}</Text>
                    </View>
                  </View>
        )
    }
}

export default Events;
 
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    }
})
