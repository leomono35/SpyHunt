import React from 'react'
import {View, Text, Button, StyleSheet, FlatList } from 'react-native'

class rolePresentation extends React.Component {

  constructor(props) {
    super(props)
    this.initialisation = true
    this.nbrJoueur = -1
    this.espion = 0
    this.lieu = 0

    this.nbrRandom = 0
    this.joueurActuel = 0
    this.role = 0
    this.isEspion = false

    this.state = {affichage: false}
  }

  _initialisation(Characters, nbrDeLieu) {
    this.initialisation = 0
    this.nbrJoueur = Characters.length
    this._Randomizer(this.nbrJoueur)
    this.espion = this.nbrRandom
    this._Randomizer(nbrDeLieu)
    this.lieu = this.nbrRandom
  }

  _Randomizer(modulo) {
    this.nbrRandom = Math.floor(Math.random() * 100) % modulo;
  }

  _switchAffichage(placeSize) {
    if(!this.state.affichage || this.nbrJoueur != this.joueurActuel){
      if(this.state.affichage) {
        this.setState({affichage: false})
      }
      else {
        if(this.joueurActuel != this.espion) {
          this.isEspion  = false
          this._Randomizer(placeSize)
        }
        else {
          this.isEspion = true
        }
        this.setState({affichage: true})

        this.joueurActuel += 1
      }
    }
    else {
      this.props.navigation.navigate('Chronomètre')
    }
  }

  render() {

    const supermarket= ["client", "caissier", "patron", "supermarché"]
    const policeStation= ["policier", "criminel", "victime", "commissariat"]
    const bank= ["banquier", "client", "voleur", "conseiller", "banque"]
    const circus= ["clown", "dresseur de fauve", "visiteur", "présentateur", "cirque"]
    const beach= ["vendeur de plage", "baigneur", "pickpocket", "sauveteur", "plage"]
    const boat= ["capitaine", "marin", "prisonnier", "cuisinier", "bateau pirate"]
    const tableOfPlaces= [supermarket, policeStation, bank, circus, beach, boat]

    const {Characters}  = this.props.route.params

    return (
      <View style={{backgroundColor:'cyan', flex:1}}>
        <View style={styles.viewContainer}>
          {this.initialisation ? this._initialisation(Characters, tableOfPlaces.length) : null}
          {this.state.affichage && !this.isEspion ? <Text>Tu es un(e) {tableOfPlaces[this.lieu][this.nbrRandom]} dans un(e) {tableOfPlaces[this.lieu][tableOfPlaces[this.lieu].length - 1]}</Text> : null}
          <View style={{flex:0.05}}/>
          {this.state.affichage && !this.isEspion ? <Button title='Compris !' onPress={() => this._switchAffichage(0)}/> : null}
          {this.state.affichage && this.isEspion ? <Text>Tu es l'espion ! Sois discret !</Text> : null}
          <View style={{flex:0.05}}/>
          {this.state.affichage && this.isEspion ? <Button title='Compris !' onPress={() => this._switchAffichage(0)}/> : null}
          {!this.state.affichage ? <Text>Passe le téléphone à {Characters[this.joueurActuel]}</Text> : null}
          <View style={{flex:0.05}}/>
          {!this.state.affichage ? <Button title='Afficher mon rôle' onPress={() => this._switchAffichage(tableOfPlaces[this.lieu].length - 1)}/> : null}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    marginTop:15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'cyan'
  }
})

export default rolePresentation
