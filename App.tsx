import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import RingingPhoneIndicator from './src/animation/ringing_phone/RingingPhoneIndicator'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <RingingPhoneIndicator />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
