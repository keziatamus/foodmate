import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from 'react-native';

export default class App extends React.Component {
  state={
    email:"",
    password:""
  }
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>foodmate</Text>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Username" 
            placeholderTextColor="#707070"
            onChangeText={text => this.setState({email:text})}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Password" 
            placeholderTextColor="#707070"
            onChangeText={text => this.setState({password:text})}/>
        </View>
        <TouchableOpacity>
          <Text onPress={() => this.props.navigation.navigate('Forgot Password')}
          style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn}>
          <Text>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Text onPress={() => this.props.navigation.navigate('Sign Up')}
        style={styles.signUpText}>Sign Up
        </Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:'black',
    marginBottom:40,
    letterSpacing: 3
  },
  inputView:{
    width:"80%",
    backgroundColor:"#FAF7F0",
    borderRadius:20,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"black"
  },
  forgot:{
    color:"#FBAF02",
    fontSize:10,
    marginLeft: 200
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#FBAF02",
    borderRadius:20,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:50,
    marginBottom:10
  },
  signUpText:{
    fontSize:13,
    color:"#FBAF02"
  }
});