import React from 'react'
import {View, Text, Button, StyleSheet} from 'react-native'

class Home extends React.Component{

  render() {
    return (
      <View style={styles.viewContainer}>
        <Button style={styles.buttonBaseContainer} title= 'Jouer' onPress={() => this.props.navigation.navigate('Joueurs')}/>
        <View style={{flex:0.05}}/>
        <Button style={styles.buttonBaseContainer} title='Une première fois ? Apprends les règles !' onPress={() => this.props.navigation.navigate('Règles')}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'cyan'
  },
  buttonBaseContainer: {
    flex:1
  }
})

export default Home
