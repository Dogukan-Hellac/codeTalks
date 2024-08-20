import { FlatList, View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from './CreateRoomsScreen.style'
import RoomsCard from '../../components/RoomsCard/RoomsCard'
import FloatingButton from '../../components/FloatingButton/FloatingButton'
import CreateRoomsModal from '../../components/Modals/CreateRoomsModal'
import { writeNewPost, listPost } from '../../features/Database'


export default function CreateRoomsScreen() {
    const [isModalVisible, setModalVisible] = useState(false);
    const [text, setText] = useState('')
    const [rooms, setRooms] = useState([])

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    }

    const handlePosts = () => {
        writeNewPost(text)
        setText('')
        setModalVisible(false)
    }

    useEffect(()=>{
       listPost(setRooms)
    }, [])

    return (
        <View style={styles.container}>
            <CreateRoomsModal
                isModalVisible={isModalVisible}
                toggleModal={toggleModal}
                onChangeText={setText}
                value={text}
                onPress={handlePosts}
            />
            <FloatingButton onPress={toggleModal} />
            <FlatList
            data={rooms}
            keyExtractor={(item)=> item.id}
            numColumns={2}
            renderItem={({item})=> {return(
               <RoomsCard title={item.roomName}/>
            )}}
            />
        </View>
    )
}

