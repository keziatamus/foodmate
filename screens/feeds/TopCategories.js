import React, { Component} from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

class TopCategories extends Component{
    render(){
        return(
            <View style={{width:250, height:230, paddingLeft:20}}>
                    <View style={{flex:2}}>
                      <Image source={this.props.imageUri}  
                      style={{flex:1, width:null, height:null, resizeMode:'cover', borderRadius:10, marginVertical:10}}/>

                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                      <Text style={{fontSize:15, fontWeight:'600'}}>{this.props.name}</Text>
                      <Text style={{fontSize:13, fontWeight:'400'}}>{this.props.total}</Text>
                    </View>
                    <View style={{flex:1,paddingTop:5}}>
                    <Text style={{fontsize:14, fontWeight:'300'}}>{this.props.menu}</Text>
                    </View>
                  </View>
        )
    }
}

export default TopCategories;
 
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    }
})
