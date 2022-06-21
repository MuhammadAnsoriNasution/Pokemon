import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import screens from '../screens';

const Stack = createNativeStackNavigator();
export default function Routers() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={screens.SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Home" component={screens.HomeScreen} />
        <Stack.Screen name="Detail" component={screens.DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
