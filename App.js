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
import InputLocation from './screens/feeds/InputLocation';
import SelectCategory from './screens/feeds/SelectCategory';
import global from './global';
//import Profile from './screens/Profile/Profile';

const Stack = createStackNavigator();

export default class App extends React.Component {
  state = {
    logined: false,
    user: null,
  };
  componentDidMount() {
    global.app = this;
  }
  render() {
    if (global.config['apiKey'] == undefined) {
      return <ErrorConfig />;
    }
    var screen = "Log In";
    if (this.state.logined) screen = "Foodmate";

    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName={screen}>
          <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
          <Stack.Screen name="Log In" component={LoginScreen} />
          <Stack.Screen name="Sign Up" component={SignUpScreen} />
          <Stack.Screen name="Forgot Password" component={ForgotPassword} />
          <Stack.Screen name="Code Confirmation" component={CodeConfirmation} />
          <Stack.Screen name="Foodmate" component={HomePage} />
          <Stack.Screen name="Create" component={CreateEvent} />
          <Stack.Screen name="Map" component={MapScreen} />
          <Stack.Screen name="Input Location" component={InputLocation} />
          <Stack.Screen name="Select Category" component={SelectCategory} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
