import React from 'react'
import {View, Text, Button, StyleSheet, ScrollView} from 'react-native'

class Rules extends React.Component{

  constructor() {
    super()
    this.state = {
      showRule: false
    }
  }

  _showRules = ()  => {
    this.setState({showRule: true})
  }

  render() {
    return (
        <ScrollView style = {styles.viewContainer}>
          <Text style={styles.titleContainer}> Les règles ! </Text>
          <Text style = {{fontSize: 10}}></Text>
          <Text style={styles.titleContainer}>Déjà comment commence le jeu ?!</Text>
          <Text style={styles.textContainer}>Une fois que tous vos noms auront été enregistrés, un rôle aléatoire sera assigné à chacun d'entre vous. Ce rôle est secret ! chacun le garde pour soi !</Text>
          <Text style={styles.textContainer}>Ce rôle peut être deux choses : </Text>
          <Text style={styles.textContainer}> - Vous êtes l'espion. Alors c'est la seule information que vous aurez</Text>
          <Text style={styles.textContainer}> - Vous n'êtes pas l'espion. Alors vous aurez un lieu supermarché, banque ...) et un rôle dans ce lieu (caissier, client ...). Pendant toute la partie, vous endossez ce rôle et devez répondre aux questions en tant que tel</Text>
          <Text style={styles.titleContainer}>Et après, quand est-ce qu'on joue ?</Text>
          <Text style={styles.textContainer}>Immédiatement ! une fois que tous les rôles ont étés distribués, la partie démarre. Pendant 5 minutes vous devez vous poser des questions les uns aux autres et essayer de deviner qui est l'espion en utilisant le fait qu'il est le seul à ne pas connaître le lieu !</Text>
          <Text style={styles.textContainer}>Attention cependant ! l'espion peut gagner de différentes manières : </Text>
          <Text style={styles.textContainer}> - s'il n'est pas désigné en fin de partie, bien sûr.</Text>
          <Text style={styles.textContainer}> - ou s'il parvient à deviner le lieu ! attention donc à ne pas poser de questions trop spécifiques pour ne pas lui donner trop d'indices !</Text>
          <Text style={styles.titleContainer}>Fin de partie</Text>
          <Text style={styles.textContainer}>Lorsque le chrono de 5 minutes est terminé, ou lorsque vous avez décidé de terminer la partie en avance, plus personne n'a le droit de poser de question. Tout le monde doit choisir pour voter, on compte jusqu'à 3 et tout le monde vote en même temps !</Text>
          <Text style={styles.textContainer}>Celui qui reçoit le plus de votes est désigné comme espion.</Text>
          <Text style={styles.textContainer}>Si la personne désignée n'est pas l'espion, l'espion a gagné.</Text>
          <Text style={styles.textContainer}>S'il s'agissait de lui, l'espion a droit à une dernière chance en essayant de deviner le lieu. S'il réussit, il gagne, sinon, tous les autres joueurs sont victorieux !</Text>
          <Text style={styles.titleContainer}>Amusez vous bien !</Text>
          <Text style = {{fontSize: 25}}></Text>
        </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: 'cyan',
  },
  textContainer: {
    flex : 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    paddingLeft: 5
  },
  titleContainer: {
    flex : 1,
    fontSize: 20,
    textAlign: 'center',
    marginTop: 25
  }
})

export default Rules
