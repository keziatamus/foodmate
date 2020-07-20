import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; //npm install @react-navigation/stack
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import ForgotPassword from './screens/ForgotPassword';
import CodeConfirmation  from './screens/CodeConfirmation'; 
import HomePage from './screens/feeds/HomePage'; 
import UserProfile from './screens/feeds/UserProfile'; 

const Stack = createStackNavigator();

function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Profile"> 
          <Stack.Screen name="Log In" component={LoginScreen}/>
          <Stack.Screen name="Sign Up" component={SignUpScreen}/>
          <Stack.Screen name="Forgot Password" component={ForgotPassword}/>  
          <Stack.Screen name="Code Confirmation" component={CodeConfirmation}/>  
          <Stack.Screen name="Foodmate" component={HomePage}/>
          <Stack.Screen name="Profile" component={UserProfile}/>
          </Stack.Navigator>
      </NavigationContainer>
    );
}

export default App;
