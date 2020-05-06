import React from 'react'
import {View, Text, Button, StyleSheet} from 'react-native'

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
        <View style = {styles.viewContainer}>
          {!this.state.showRule ? <Button title='Une première fois ? Apprends les règles !' onPress={this._showRules}/> : null}
          {this.state.showRule ? <Text style= {{ fontSize: 75, color: "#000", textAlign: 'center' }}> Hello Friends </Text> : null}
          <Button title='Jouer' onPress={() => {}}/>
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
  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 100,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Rules
