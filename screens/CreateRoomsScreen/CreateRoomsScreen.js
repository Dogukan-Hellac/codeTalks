import { View, FlatList } from 'react-native'
import React, { useState } from 'react'
import styles from './CreateRoomsScreen.style'
import RoomsCard from '../../components/RoomsCard/RoomsCard'
import FloatingButton from '../../components/FloatingButton/FloatingButton'
import CreateRoomsModal from '../../components/Modals/CreateRoomsModal'

export default function CreateRoomsScreen() {
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    }

    return (
        <View style={styles.container}>
            <CreateRoomsModal
                isModalVisible={isModalVisible}
                toggleModal={toggleModal}
            />
            <FloatingButton onPress={toggleModal} />
        </View>
    )
}