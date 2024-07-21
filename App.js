import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, {Component} from 'react'

import LandingScreen from './components/auth/Landing';
import RegisterScreen from './components/auth/Register';
import LoginScreen from './components/auth/Login';
import { Home } from './components/auth/home';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Landing" component={LandingScreen} options = {{headerShown: false}}/>
        <Stack.Screen name="SIGNUP" component={RegisterScreen}/>
        <Stack.Screen name="LOGIN" component={LoginScreen}/>
        <Stack.Screen name="Home" component={Home}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}