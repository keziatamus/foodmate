import React, { Component} from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { Icon, Container, Content, Button } from 'native-base'
//npm install native-base
//npm install --save react-native-image-crop-picker

class Profile extends Component{
    render(){
        return(
        <Container style={{flex:1, backgroundColor: 'white'}}>
            <Content>
                <View>
                    <View style={{flexDirection:'row', padding:10}}>
                        <View style={{flex:1, padding:10,alignItems:'center'}}>
                            <Image source={require('../../assets/me.jpg')}
                            style={{width:90, height:90, borderRadius:45}}/>
                        </View>
                        <View style={{flex:3}}>
                            <View style={{flexDirection:'row', 
                                justifyContent:'space-around', padding:10}}>
                                <View style={{alignItems:'center'}}> 
                                    <Text style={{fontSize:16}}>4</Text>
                                    <Text style={{fontSize:12, color:'grey'}}>
                                    created</Text>
                                </View>
                                <View style={{alignItems:'center'}}> 
                                    <Text style={{fontSize:16}}>10</Text>
                                    <Text style={{fontSize:12, color:'grey'}}>
                                    joined</Text>
                                </View>
                                <View style={{alignItems:'center'}}> 
                                    <Text style={{fontSize:16}}>14</Text>
                                    <Text style={{fontSize:12, color:'grey'}}>
                                    total</Text>
                                </View>
                            </View>

                            <View style={{flexDirection:'row'}}>
                                    <Button bordered light
                                        onPress={()=> this.props.navigation.navigate('Edit Profile')}
                                        style={{flex:3, marginLeft: 10, justifyContent:'center', height: 40}}>
                                        <Text>Edit Profile</Text>
                                    </Button>
                                    <Button bordered light
                                        style={{flex:1, height:40, marginRight:10, marginLeft:5, justifyContent:'center'}}>
                                        <Icon name="settings"/>
                                    </Button>
                            </View>
                        </View>
                    </View>

                    <View style={{paddingHorizontal:20}}>
                        <Text style={{fontSize:16, fontWeight:'bold'}}>Jennie</Text>
                        <Text style={{fontSize:14, fontWeight:'bold'}}>Female, 24</Text>
                        <Text style={{fontSize:14, paddingTop:5, paddingBottom:15}}>A huge fan of milk flavored ice cream</Text>
                    </View>
                     
                    <View
                            style={{
                            borderBottomColor: '#ebe6e6',
                            borderBottomWidth: 1}}/>

                    <View style={styles.event_container}>                        
                        <Text style={{fontSize:16, fontWeight:'bold', color:'black'}}>
                            Current Events
                        </Text>
                        <Text style={{fontSize:12, fontWeight:'bold', color:'#b0b0b0'}}
                        onPress={()=> this.props.navigation.navigate('Current Events')}>
                            View All
                        </Text>
                    </View>

                    <View style={{height:130}}>
                        <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}>
                            <View style={{width:350, height:120, marginLeft:20}}>
                            <View style={{flex:1, flexDirection:'row', marginTop:10}}>
                                <Image 
                                    source={require('../../assets/current_event/1.jpg')}  
                                    style={{flex:1, width:null, height:null, resizeMode:'cover', borderRadius:10, marginRight:10}}/>
                                <Image 
                                    source={require('../../assets/current_event/2.jpg')}  
                                    style={{flex:1, width:null, height:null, resizeMode:'cover', borderRadius:10, marginRight:10}}/>
                            </View>
                            </View>
                        </ScrollView>
                    </View>

                    <View style={styles.event_container}>                        
                        <Text style={{fontSize:16, fontWeight:'bold', color:'black'}}>
                            Past Events
                        </Text>
                        <Text style={{fontSize:12, fontWeight:'bold', color:'#b0b0b0'}}
                        onPress={()=> this.props.navigation.navigate('Past Events')}>
                            View All
                        </Text>
                    </View>

                    <View style={{height:150}}>
                        <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}>
                            <View style={{width: 350, height:120, marginLeft:20}}>
                            <View style={{flex:1, flexDirection:'row', marginTop:10}}>
                                <Image 
                                    source={require('../../assets/past_event/1.jpg')}  
                                    style={{flex:1, width:null, height:null, resizeMode:'cover', borderRadius:10, marginRight:10}}/>
                                <Image 
                                    source={require('../../assets/past_event/2.jpg')}  
                                    style={{flex:1, width:null, height:null, resizeMode:'cover', borderRadius:10, marginRight:10}}/> 
                            </View>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </Content>
        </Container>
        )
    }
}

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    event_container: {
        paddingTop:15, 
        paddingLeft:20, 
        paddingRight:20, 
        flexDirection:'row', 
        justifyContent:'space-between',
        alignItems:'center'
    },
})
