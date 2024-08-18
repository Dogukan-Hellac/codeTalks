import { View, Text } from 'react-native'
import React from 'react'
import FloatingButton from '../../components/FloatingButton'
import styles from './ChatRoomScreen.style'

export default function ChatRoomScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>react odası kuruldu!</Text>
            </View>
            <FloatingButton />
        </View>
    )
}