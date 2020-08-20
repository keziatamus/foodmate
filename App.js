import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; 
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import ForgotPassword from './screens/ForgotPassword';
import CodeConfirmation from './screens/CodeConfirmation';
import ResetPassword from './screens/ResetPassword';
import HomePage from './screens/feeds/HomePage';
import CreateEvent from './screens/feeds/CreateEvent';
import MapScreen from './screens/MapScreen';
import Tabs from './screens/feeds/HomePage';
import InputLocation from './screens/feeds/InputLocation';
import SelectCategory from './screens/feeds/SelectCategory';
import ViewEvent from './screens/feeds/ViewEvent';
import EditProfile from './screens/feeds/EditProfile';
import PersonalInfo from './screens/feeds/PersonalInfo';
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
    var screen = "Foodmate";
    if (this.state.logined) screen = "Foodmate";

    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName={screen}>
          <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }}/>
          <Stack.Screen name="Log In" component={LoginScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="Sign Up" component={SignUpScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="Forgot Password" component={ForgotPassword} options={{ headerShown: false }}/>
          <Stack.Screen name="Code Confirmation" component={CodeConfirmation} options={{ headerShown: false }}/>
          <Stack.Screen name="Reset Password" component={ResetPassword} options={{ headerShown: false }}/>
          <Stack.Screen name="Foodmate" component={HomePage} />
          <Stack.Screen name="Create" component={CreateEvent} />
          <Stack.Screen name="View Event" component={ViewEvent} options={{ headerShown: false }}/>
          <Stack.Screen name="Map" component={MapScreen} />
          <Stack.Screen name="Set Location" component={InputLocation} options={{ headerBackTitle: 'Back'}}/>
          <Stack.Screen name="Select Category" component={SelectCategory} />
          <Stack.Screen name="Edit Profile" component={EditProfile} options={{ headerBackTitle: 'Profile'}}/>
          <Stack.Screen name="Personal Information" component={PersonalInfo} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
