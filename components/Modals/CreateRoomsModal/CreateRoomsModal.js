import { View, TextInput } from 'react-native'
import Button from '../../Button'
import React from 'react'
import Modal from "react-native-modal"
import styles from './CreateRoomsModal.style'

export default function CreateRoomsModal({ isModalVisible, toggleModal }) {
    return (
        <Modal
            isVisible={isModalVisible}
            onBackdropPress={toggleModal}
            style={styles.modal}
        >
            <View style={styles.container}>
                <TextInput placeholder='Oda adı..' multiline/>
                <Button title="Ekle" />
            </View>
        </Modal>
    )
}