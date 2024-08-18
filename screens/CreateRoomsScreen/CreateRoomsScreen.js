import { View, FlatList } from 'react-native'
import React from 'react'
import styles from './CreateRoomsScreen.style'
import RoomsCard from '../../components/RoomsCard/RoomsCard'
import FloatingButton from '../../components/FloatingButton/FloatingButton'

export default function CreateRoomsScreen() {
    return (
        <View style={styles.container}>
            {/* <FlatList 
            numColumns={2}
            style={styles.list}
            /> */}
            <FloatingButton />
        </View>
    )
}