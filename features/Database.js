import { getDatabase, ref, child, push, update, onValue } from "firebase/database";

function writeNewPost(roomName) {
    const db = getDatabase()

    const postData = {
        roomName: roomName
    }

    const newPostKey = push(child(ref(db), 'posts')).key

    const updates = {}
    updates['/rooms/' + newPostKey] = postData

    return update(ref(db), updates)
}

function listPost(setRooms) {
    const db = getDatabase()
    const roomNameRef = ref(db, 'rooms/')
    onValue(roomNameRef, (snapshot) => {
        const data = snapshot.val()
        if (data) {
            const roomList = Object.keys(data).map(key => ({ id: key, ...data[key] }))
            setRooms(roomList)
        } else {
            setRooms([])
        }
    })
}

export { writeNewPost, listPost }
