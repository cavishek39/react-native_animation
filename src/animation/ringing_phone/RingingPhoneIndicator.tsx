import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Feather from '@expo/vector-icons/Feather'
import { MotiView } from 'moti'
import { Easing } from 'react-native-reanimated'

const _size = 100
const _color = '#6E01EF'

export default function RingingPhoneIndicator() {
  return (
    <View style={styles.container}>
      <View style={[styles.dot, styles.center]}>
        {[...Array(3).keys()].map((it, index) => (
          <MotiView
            key={index}
            from={{ opacity: 0.7, scale: 1 }}
            animate={{ opacity: 0, scale: 4 }}
            transition={{
              type: 'timing',
              duration: 2000,
              easing: Easing.out(Easing.ease),
              loop: true,
              delay: index * 400,
              repeatReverse: false,
            }}
            style={[StyleSheet.absoluteFillObject, styles.dot]}
          />
        ))}
        <Feather name='phone-outgoing' size={24} color='#fff' />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  dot: {
    width: _size,
    height: _size,
    borderRadius: _size,
    backgroundColor: _color,
  },
  center: { alignItems: 'center', justifyContent: 'center' },
})
