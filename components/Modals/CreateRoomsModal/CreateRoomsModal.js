import { View, TextInput } from 'react-native'
import Button from '../../Button'
import React from 'react'
import Modal from "react-native-modal"
import styles from './CreateRoomsModal.style'

export default function CreateRoomsModal({ isModalVisible, toggleModal, onChangeText, value, onPress }) {
    return (
        <Modal
            isVisible={isModalVisible}
            onBackdropPress={toggleModal}
            style={styles.modal}
        >
            <View style={styles.container}>
                <TextInput
                    onChangeText={onChangeText}
                    value={value}
                    placeholder='Oda adı..'
                    multiline />
                <Button
                    onPress={onPress}
                    title="Ekle"
                />
            </View>
        </Modal>
    )
}