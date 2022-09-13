import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { MotiView } from 'moti'
import { ringSize } from '../../constants/constants'
import { Easing } from 'react-native-reanimated'

export default function Loading() {
  return (
    <View style={styles.container}>
      <MotiView
        from={{
          width: ringSize,
          height: ringSize,
          borderRadius: ringSize / 2,
          borderWidth: 0,
        }}
        animate={{
          width: ringSize + 20,
          height: ringSize + 20,
          borderRadius: (ringSize + 20) / 2,
          borderWidth: ringSize / 10,
        }}
        transition={{
          type: 'timing',
          duration: 1500,
          easing: Easing.out(Easing.ease),
          loop: true,
        }}
        style={styles.ring}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  ring: {
    width: ringSize,
    height: ringSize,
    borderWidth: 6,
    borderColor: '#fff',
    borderRadius: ringSize / 2,
  },
})
