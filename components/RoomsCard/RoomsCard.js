import { TouchableOpacity, Text } from 'react-native'
import React from 'react'
import styles from './RoomsCard.style'

export default function RoomsCard({ title, onPress }) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}