import React from 'react'
import {View, Text, Button, StyleSheet} from 'react-native'

class VoteScreen extends React.Component{

  render() {
    return (
      <View style={styles.viewContainer}>
        <Text style={{textAlign: 'center'}}>C'est l'heure de voter ! Espion si tu es désigné, tente ta dernière chance en devinant le lieu !</Text>
        <View style={{flex:0.05}}/>
        <Button title= 'Fini !' onPress={() => this.props.navigation.navigate('Accueil')}/>
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
  }
})

export default VoteScreen
