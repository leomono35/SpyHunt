import React, {Component} from 'react';
import Home from './Components/Home';
import Rules from './Components/Rules'
import Character from './Components/Character'

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name = "Accueil" component={Home}/>
          <Stack.Screen name = "Règles" component={Rules}/>
          <Stack.Screen name = "Joueurs" component={Character}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
