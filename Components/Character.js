import React from 'react'
import { StyleSheet, View, TextInput, Button, Text, FlatList } from 'react-native'
import Home from './Home'

class Character extends React.Component{

  constructor(props) {
    super(props)
    this.addCharacter = ""
    this.state = {
      Characters: []
    }
  }

   _charactersInputChanged(text) {
     this.addCharacter = text
   }

   _addCharacter() {
     if(this.addCharacter.length > 0) {
       this.setState({Characters: [ ...this.state.Characters, this.addCharacter ]})
       this.textInput.clear()
       this.addCharacter=""
     }
   }

   _launch() {
     if(this.state.Characters.length > 1) {
      this.props.navigation.navigate('Rôles', {Characters: this.state.Characters})
      }
   }

  render() {
    return (
      <View style={{backgroundColor:'cyan', flex:1}}>
        <View style={styles.viewContainer}>
          <Text>Entre le nom d'un joueur et valide pour l'ajouter !</Text>
          <Text>Clique sur un nom déjà ajouté pour le supprimer.</Text>
          <View style={{flex:0.05}}/>
          <TextInput
            style={styles.textInputContainer}
            placeholder='Nom du joueur'
            onChangeText={(text) => this._charactersInputChanged(text)}
            onSubmitEditing={() => this._addCharacter()}
            ref={input => { this.textInput = input }}
          />
          <View style={{flex:0.05}}/>
          <Button title='Ajouter' onPress={() => this._addCharacter()}/>
          <View style={{flex:0.05}}/>
          <Button title='Démarrer' onPress={() => this._launch()}/>
          <View style={{flex:0.05}}/>
          <FlatList
            data={this.state.Characters}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => <Text>{item}</Text>}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    marginTop:15,
    alignItems: 'center',
    backgroundColor: 'cyan'
  },
  textInputContainer: {
    marginLeft: 5,
    marginRight: 5,
    height: 40,
    width: 300,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5
  }
})

export default Character
