import React, {Component} from 'react';
import Home from './Components/Home';
import Rules from './Components/Rules'
import Character from './Components/Character'
import rolePresentation from './Components/rolePresentation'
import Timer from './Components/Timer'
import VoteScreen from './Components/VoteScreen'

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
          <Stack.Screen name = "Rôles" component={rolePresentation}/>
          <Stack.Screen name = "Chronomètre" component={Timer}/>
          <Stack.Screen name = "Vote" component={VoteScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
