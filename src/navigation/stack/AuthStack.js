import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../../screens/Auth/LoginScreen';
import RegisterScreen from '../../screens/Auth/RegisterScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AuthStack