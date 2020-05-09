import React from 'react'
import {View, Text, Button, StyleSheet, FlatList } from 'react-native'

class rolePresentation extends React.Component {

  render() {

    const supermarket= ["client", "caissier", "supermarché"]
    const policeStation= ["policier", "criminel", "commissariat"]
    const tableOfPlaces= [supermarket, policeStation]

    const {Characters}  = this.props.route.params

    return (
      <View style={{backgroundColor:'cyan', flex:1}}>
        <View style={styles.viewContainer}>
          <Text>{tableOfPlaces[0][1]}</Text>
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
