import { TouchableOpacity, Text } from 'react-native'
import React from 'react'
import styles from './Button.style'

export default function Button({ title, onPress, theme='primary' }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles[theme].container}
    >
      <Text style={styles[theme].title}>{title}</Text>
    </TouchableOpacity>
  )
}