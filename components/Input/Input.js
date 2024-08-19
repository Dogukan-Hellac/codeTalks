import { View, TextInput } from 'react-native'
import React from 'react'
import styles from './Input.style'
import colors from '../../constants/Color'

export default function Input({ placeholder, onChangeText, value }) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={colors.white}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  )
}