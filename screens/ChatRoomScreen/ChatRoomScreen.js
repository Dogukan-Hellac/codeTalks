import { View, Text, FlatList } from 'react-native'
import React, { useLayoutEffect, useState, useEffect } from 'react'
import FloatingButton from '../../components/FloatingButton'
import CreateRoomsModal from '../../components/Modals/CreateRoomsModal'
import styles from './ChatRoomScreen.style'
import { writeNewPost, listPost } from '../../features/Database'
import MessageCard from '../../components/MessageCard/MessageCard'

export default function ChatRoomScreen({ navigation, route }) {
    const [isModalVisible, setModalVisible] = useState(false)
    const [text, setText] = useState('')
    const [messages, setMessages] = useState('')
    const item = route.params.item

    useLayoutEffect(() => {
        navigation.setOptions({
            title: item.roomName
        })
    }, [navigation, item.roomName])

    const handlePosts = () => {
        writeNewPost('message', text, `rooms/${item.id}/roomMessages/`, 'roomMessages')
        setText('')
        setModalVisible(false)
    }

    useEffect(() => {
        listPost(setMessages, `rooms/${item.id}/roomMessages/`)
    }, [])

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    }

    return (
        <View style={styles.container}>
            <CreateRoomsModal
                isModalVisible={isModalVisible}
                toggleModal={toggleModal}
                onChangeText={setText}
                value={text}
                onPress={handlePosts}
            />
            <View style={styles.header}>
                <Text style={styles.headerTitle}>{item.roomName} odası kuruldu!</Text>
            </View>
            <FloatingButton onPress={toggleModal} />
            <FlatList
                data={messages}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    return (
                        <MessageCard item={item}/>
                    )
                }}
            />
        </View>
    )
}