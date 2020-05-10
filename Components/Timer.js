import React from 'react'
import {View, Text, Button, StyleSheet} from 'react-native'

class Timer extends React.Component {

  render() {
    return (
      <View style={{backgroundColor: 'cyan', flex: 1}}>
        <View style={styles.viewContainer}>
          <Text>coucou timer :)</Text>
        </View>
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

export default Timer
