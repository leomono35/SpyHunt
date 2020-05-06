import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from "../Components/Home";
import Rules from "../Components/Rules";


const Stack = createStackNavigator()


export default function Navigator() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Rules' component={Rules} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
