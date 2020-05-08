import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

class CharacterName extends React.Component{
  render() {
    return (
      <View>
        <Text style={styles.nameContainer}>NAME</Text>
      </View>
    )
  }
}

  const styles = StyleSheet.create({
    nameContainer: {
      marginLeft: 5,
      marginRight: 5,
      height: 40,
      width: 300,
      borderColor: '#000000',
      borderWidth: 1,
      paddingLeft: 5
    }
  })

export default CharacterName
