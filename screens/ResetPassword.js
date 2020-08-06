import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default class App extends React.Component {
  state={
    new_password:"",
    confirm_password:"",
  }
  render(){
    return (
        <SafeAreaView style={styles.container}>
         <TouchableOpacity>
             <Text style={styles.titleText}>Enter a New Password</Text>
        </TouchableOpacity>
        <TouchableOpacity>
             <Text style={styles.baseText}>Reset your password to log in to Foodmate.</Text>
        </TouchableOpacity>  
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="New password" 
            placeholderTextColor="#707070"
            onChangeText={text => this.setState({new_password:text})}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="New password confirmation" 
            placeholderTextColor="#707070"
            onChangeText={text => this.setState({confirm_password:text})}/>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate ("Log In" )}>
        <Text>Reset Password</Text>
        </TouchableOpacity>

    </SafeAreaView>
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
  inputView:{
    width:"80%",
    backgroundColor:"#FAF7F0", 
    borderRadius:20,
    height:50,
    marginTop:10,
    marginBottom:0,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"black"
  },
  button:{
    width:"80%",
    backgroundColor:"#FBAF02",
    borderRadius:20,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:20,
    marginBottom:10
  },
  titleText:{
    fontSize:20,
    color:"black",
    fontWeight: 'bold',
    textAlign:'center',
    marginBottom:10,
    paddingHorizontal: "10%"
  },
  baseText:{
    fontSize:14,
    color:"black",
    textAlign:'center',
    marginBottom:50,
    paddingHorizontal: "10%"
  }
});

