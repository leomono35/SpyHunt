{/*A ce stade, le if détecte que addCharacter contient un truc, mais pas moyen d l'afficher avec le texte audessus de flatlist ... et du coup je sais pas vraiment ce qu'il contient ... comme s'il était vide ? mais le if a réagi ? .... chiant ---'*/}

import React from 'react'
import { StyleSheet, View, TextInput, Button, Text, FlatList } from 'react-native'

class Character extends React.Component{

  constructor(props) {
    super(props)
    this.addCharacter = ""
    this.state = {
      Characters: ["bonjour","coucou","salut"]
    }
  }

   _charactersInputChanged(text) {
     this.addCharacter = text
   }

   _addCharacter() {
     if(this.addCharacter.length > 0) {
        console.log("okay")
        this.setState({Characters: [ ...this.state.Characters, this.state.addCharacter]})
     }
   }

  render() {
    return (
      <View style={{backgroundColor:'cyan', flex:1}}>
        <View style={styles.viewContainer}>
          <Text>Entre le nom d'un joueur et valide pour l'ajouter !</Text>
          <Text>Clique sur un nom déjà ajouté pour le supprimer.</Text>
          <View style={{flex:0.05}}/>
          <TextInput style={styles.textInputContainer} placeholder='Nom du joueur' onChangeText={(text) => this._charactersInputChanged(text)}/>
          <View style={{flex:0.05}}/>
          <Button title='Ajouter' onPress={() => this._addCharacter()}/>
          <View style={{flex:0.05}}/>
          <Text>{this.state.addCharacter}</Text>
          <FlatList
            data={this.state.Characters}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => <Text>{item}</Text>}
          />
          {console.log("NOTokay")}
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
