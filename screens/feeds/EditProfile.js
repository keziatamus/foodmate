import React, { Component} from 'react';
import { View, Text, TextInput, StyleSheet, Image } from 'react-native';
import { Icon, Container, Content, Header, Left, Body, Right, Button, Title } from 'native-base'

class Edit extends Component{
    render(){
        return(
            <Container style={{flex:1, backgroundColor: 'white'}}>
            <Content>
                <View>
                        <View style={{flex:1, padding:20,alignItems:'center'}}>
                            <Image source={require('../../assets/me.jpg')}
                            style={{width:90, height:90, borderRadius:45}}/>
                        </View>
                        <Text 
                        style={{
                            fontSize:14, 
                            fontWeight:'bold',
                            color:'#FBAF02', 
                            alignSelf:'center'}}>
                            Change Profile Photo
                        </Text>
                        <View
                            style={{
                            marginVertical:20,
                            borderBottomColor: '#ebe6e6',
                            borderBottomWidth: 1}}/>

                    <View style={{flex:1, flexDirection:'column'}}>
                        <View style={{flexDirection:'row'}}>
                        <Text style={{fontSize:16, paddingLeft:20, paddingRight:80}}>Name</Text>
                        <TextInput
                            style={{fontSize: 16, width:'60%', paddingBottom:15}}
                            defaultValue="Jennie Kim"
                            placeholder='Name'
                            borderBottomColor='#ebe6e6'
                            borderBottomWidth="1"
                            clearButtonMode={true}/>
                        </View>

                        <View style={{flexDirection:'row', paddingTop:20}}>
                        <Text style={{fontSize:16, paddingLeft:20, paddingRight:50}}>Username</Text>
                        <TextInput
                            style={{fontSize: 16, width:'60%', paddingBottom:15}}
                            defaultValue="jennierubyjane"
                            placeholder='Username'
                            borderBottomColor='#ebe6e6'
                            borderBottomWidth="1"
                            clearButtonMode={true}/>
                        </View>

                        <View style={{flexDirection:'row', paddingTop:20}}>
                        <Text style={{fontSize:16, paddingLeft:20, paddingRight:100}}>Bio</Text>
                        <TextInput
                            style={{fontSize: 16, width:'60%', paddingBottom:15}}
                            placeholder="Bio"
                            borderBottomColor='#ebe6e6'
                            borderBottomWidth="1"
                            clearButtonMode={true}/>
                        </View>

                        <Text 
                        onPress={()=> this.props.navigation.navigate('Personal Information')}
                        style={{
                            fontSize:16, 
                            color:'#FBAF02', 
                            padding:20}}>
                            Personal Information Settings
                        </Text>
                    </View>
                </View>
             </Content>
             </Container>
        )
    }
}

export default Edit;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    }
})