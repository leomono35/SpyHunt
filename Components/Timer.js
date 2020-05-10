import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Dimensions, Button } from 'react-native';

const formatNumber = number => `0${number}`.slice(-2);

const getRemaining = (time) => {
    const mins = Math.floor(time / 60);
    const secs = time - mins * 60;
    return { mins: formatNumber(mins), secs: formatNumber(secs) };
}

export default function Timer({ navigation: { navigate } }) {
  const [remainingSecs, setRemainingSecs] = useState(300);
  const { mins, secs } = getRemaining(remainingSecs);

  useEffect(() => {
    let interval = null;
      interval = setInterval(() => {
        setRemainingSecs(remainingSecs => remainingSecs - 1);
      }, 1000);
    if(remainingSecs == 0) {navigate('Vote')}
    return () => clearInterval(interval);
  }, [remainingSecs]);

  return (
    <View style={styles.viewContainer}>
      <Text style = {{textAlign: 'center'}}>Vous avez 5 minutes pour trouver qui est l'espion sans le laisser deviner le lieu !</Text>
      <View style={{flex:0.05}}/>
      <Text style={styles.timerText}>{`${mins}:${secs}`}</Text>
      <View style={{flex:0.05}}/>
      <Button title='Voter maintenant' onPress={() => navigate('Vote')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'cyan'
  },
  timerText: {
      color: '#000',
      fontSize: 90,
      marginBottom: 20
  }
});
