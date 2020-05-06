import React, {Component} from 'react';
import Home from './Components/Home';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name = "Accueil" component={Home}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
