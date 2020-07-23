import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; //npm install @react-navigation/stack
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import ForgotPassword from './screens/ForgotPassword';
import CodeConfirmation from './screens/CodeConfirmation';
import HomePage from './screens/feeds/HomePage';
import CreateEvent from './screens/feeds/CreateEvent';
import MapScreen from './screens/MapScreen';
import Tabs from './screens/feeds/HomePage';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tabs">
        <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
        <Stack.Screen name="Log In" component={LoginScreen} />
        <Stack.Screen name="Sign Up" component={SignUpScreen} />
        <Stack.Screen name="Forgot Password" component={ForgotPassword} />
        <Stack.Screen name="Code Confirmation" component={CodeConfirmation} />
        <Stack.Screen name="Foodmate" component={HomePage} />
        <Stack.Screen name="Create" component={CreateEvent} />
        <Stack.Screen name="Map" component={MapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
