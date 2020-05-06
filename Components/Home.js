import React from 'react'
import {View, Text, Button, StyleSheet} from 'react-native'

class Home extends React.Component{
  render() {
    return (
      <View style={styles.viewContainer}>
        <Text>coucou</Text>
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

export default Home
