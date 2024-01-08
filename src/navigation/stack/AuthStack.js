import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../../screens/Auth/LoginScreen';
import RegisterScreen from '../../screens/Auth/RegisterScreen';
import HomeScreen from '../../screens/App/HomeScreen';
import BootomTab from '../tap/BottomTab';
import ProductInfoScreen from '../../screens/App/ProductInfoScreen';
import AddAddressScreen from '../../screens/App/AddAddressScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='Login'>
            <Stack.Screen 
              name="Login" 
              component={LoginScreen} 
            />  

            <Stack.Screen 
              name="Register" 
              component={RegisterScreen} 
            />

            <Stack.Screen 
              name="Main" 
              component={BootomTab} 
            />

            <Stack.Screen 
              name="Info" 
              component={ProductInfoScreen} 
            />

            <Stack.Screen 
              name="Address" 
              component={AddAddressScreen} 
            />

            
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AuthStack